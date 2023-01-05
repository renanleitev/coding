#!/bin/bash

# Atualizando o repositório do  sistema
apt update

# Atualizando os aplicativos

# Instalando os programas
yes | sudo DEBIAN_FRONTEND=noninteractive apt-get -yq install \
xfce4 \
xfce4-goodies \
firefox-esr \
adminer \
mariadb-server \
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
