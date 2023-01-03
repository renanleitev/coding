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
ncdu \
htop \
neofetch \
python3-pip \
xfce4 \
xfce4-goodies \
firefox-esr \
adminer \
mariadb-server \
default-jdk \
 -y

# Habilitando o adminer
a2enconf adminer.conf

# Recarregando o adminer
systemctl reload apache2

# Permitindo conexões com o banco de dados
sed -i 's/# port = 3306/port = 3306/' /etc/mysql/mariadb.cnf
sed -i 's/127.0.0.1/0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf

# Reiniciando o servidor mariadb
systemctl restart mariadb.service

# Definindo uma senha padrão para o root (para acessar no adminer)
mysqladmin -u root --password= password root

# Baixando e instalando a base de dados sakila
# Verificando se sakila já não está instalado
if [[ $(mysql -uroot -proot -e "show databases" | grep "sakila") ]]
then
  echo "Banco de Dados sakila já instalado no sistema..."
else
  echo "Banco de Dados sakila não encontrado, instalando no sistema..."
  wget https://downloads.mysql.com/docs/sakila-db.tar.gz
  tar -xvf sakila-db.tar.gz
  mysql -uroot -e "create database sakila"
  mysql -uroot -proot sakila < /home/vagrant/sakila-db/sakila-schema.sql
  mysql -uroot -proot sakila < /home/vagrant/sakila-db/sakila-data.sql
  rm -r sakila*
fi

# Baixando e instalando a base de dados world
# Verificando se world-db já não está instalado
if [[ $(mysql -uroot -proot -e "show databases" | grep -w "world") ]]
then
  echo "Banco de Dados world já instalado no sistema..."
else
  echo "Banco de Dados world não encontrado, instalando no sistema..."
  wget https://downloads.mysql.com/docs/world-db.tar.gz
  tar -xvf world-db.tar.gz
  mysql -uroot -e "create database world"
  mysql -uroot -proot world < /home/vagrant/world-db/world.sql
  rm -r world-db*
fi

# Baixando e instalando a base de dados world_x
# Verificando se world_x já não está instalado
if [[ $(mysql -uroot -proot -e "show databases" | grep "world_x") ]]
then
  echo "Banco de Dados world_x já instalado no sistema..."
else
  echo "Banco de Dados world_x não encontrado, instalando no sistema..."
  wget https://downloads.mysql.com/docs/world_x-db.tar.gz
  tar -xvf world_x-db.tar.gz
  mysql -uroot -e "create database world_x"
  mysql -uroot -proot world_x < /home/vagrant/world_x-db/world_x.sql
  rm -r world_x*
fi

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

# Instalando o Visual Studio Code e Sublime Text
deb-get install code sublime-text

# Definindo o fuso horário correto (Recife/PE)
echo "Etc/GMT+3" > /etc/timezone
ln -fs /usr/share/zoneinfo/`cat /etc/timezone` /etc/localtime
dpkg-reconfigure -f noninteractive tzdata

# Instalando o tldr (para obter ajuda rápida sobre comandos)
pip3 install tldr
mv /usr/local/bin/tldr /usr/bin || echo "Programa tldr já configurado..."

# Instalando um gerenciador de arquivos estilo GUI no terminal
pip3 install TUIFIManager --upgrade

# Definindo o teclado para o padrão abnt2
if [[ $(cat /home/vagrant/.bashrc | grep "setxkbmap") ]]
then
  echo "Teclado já configurado para o padrão abnt2..."
  . /home/vagrant/.bashrc
else
  echo "setxkbmap -model abnt2 -layout br" >> /home/vagrant/.bashrc
  . /home/vagrant/.bashrc
fi

echo "Fim do Script"
