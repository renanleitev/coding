#!/bin/bash

# Evitando erros no grub-pc
echo "GRUB_DISABLE_OS_PROBER=false" >> /etc/default/grub
update-grub

# Atualizando o repositório do  sistema
apt update

# Instalando os programas
yes | sudo DEBIAN_FRONTEND=noninteractive apt-get -yq install \
xfce4 \
xfce4-goodies \
firefox-esr \
default-jdk \
 -y

# Instalando o deb-get (para instalar pacotes deb via terminal)
if [[ $(which deb-get) ]]
then
  echo "Pacote deb-get já instalado no sistema..."
else
  echo "Instalando deb-get no sistema..."
  wget https://github.com/wimpysworld/deb-get/releases/download/0.3.6/deb-get_0.3.6-1_all.deb
  sudo DEBIAN_FRONTEND=noninteractive apt-get -yq install /home/vagrant/deb-get_0.3.6-1_all.deb
  rm deb-get*
fi

# Instalando o Visual Studio Code e Sublime Text
deb-get install code sublime-text

# Instalando o Netbeans
if [[ $(apt list --installed | grep "netbeans") ]]
then
  echo "Netbeans IDE já instalado no sistema..."
else
  echo "Instalando Netbeans IDE no sistema..."
  wget https://dlcdn.apache.org/netbeans/netbeans-installers/16/apache-netbeans_16-1_all.deb
  dpkg -i apache-netbeans_16-1_all.deb
  rm apache*
fi

# Instalando o Eclipse
if [[ $(ls /usr/share/applications/ | grep "eclipse*") ]]
then
  echo "Eclipse IDE já instalado no sistema..."
else
  echo "Instalando Eclipse IDE no sistema..."
  wget https://mirror.umd.edu/eclipse/technology/epp/downloads/release/2022-12/R/eclipse-java-2022-12-R-linux-gtk-x86_64.tar.gz
  tar -xzvf eclipse-java-2022-12-R-linux-gtk-x86_64.tar.gz -C /opt
  rm eclipse-java-2022-12-R-linux-gtk-x86_64.tar.gz
  ln -sf /opt/eclipse/eclipse /usr/bin/eclipse
  touch /usr/share/applications/eclipse.desktop
  echo "[Desktop Entry]
  Encoding=UTF-8
  Name=Eclipse IDE
  Comment=Eclipse IDE for Java Developers
  Exec=/usr/bin/eclipse
  Icon=/usr/eclipse/icon.xpm
  Categories=Application;Development;Java;IDE
  Type=Application
  Terminal=0" >> /usr/share/applications/eclipse.desktop
fi

# Definindo o fuso horário correto (Recife/PE)
echo "Etc/GMT+3" > /etc/timezone
ln -fs /usr/share/zoneinfo/`cat /etc/timezone` /etc/localtime
dpkg-reconfigure -f noninteractive tzdata

# Definindo o teclado para o padrão abnt2
. /home/vagrant/.bashrc
if [[ $(cat /home/vagrant/.bashrc | grep "setxkbmap") ]]
then
  echo "Teclado já configurado para o padrão abnt2..."
  . /home/vagrant/.bashrc
else
  echo "Configurando teclado para padrão abnt2..."
  echo "setxkbmap -model abnt2 -layout br" >> /home/vagrant/.bashrc
  . /home/vagrant/.bashrc
fi

echo "Fim do Script"
