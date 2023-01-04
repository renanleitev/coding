#!/bin/bash

# Atualizando o repositório do  sistema
apt update

# Instalando o deb-get (para instalar pacotes deb via terminal)
if [[ $(which deb-get) ]]
then
  echo "Pacote deb-get já instalado no sistema..."
else
  echo "Instalando deb-get no sistema..."
  curl -sL https://raw.githubusercontent.com/wimpysworld/deb-get/main/deb-get | sudo -E bash -s install deb-get
fi

# Instalando os programas
apt install \
xfce4 \
xfce4-goodies \
firefox-esr \
default-jdk \
 -y

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

# Instalando o Visual Studio Code e Sublime Text
deb-get install code sublime-text

# Definindo o fuso horário correto (Recife/PE)
echo "Etc/GMT+3" > /etc/timezone
ln -fs /usr/share/zoneinfo/`cat /etc/timezone` /etc/localtime
dpkg-reconfigure -f noninteractive tzdata

# Definindo o teclado para o padrão abnt2
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
