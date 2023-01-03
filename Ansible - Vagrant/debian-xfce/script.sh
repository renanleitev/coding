#!/bin/bash

# Atualizando o repositório do  sistema
apt update

# Instalando os programas
apt install ncdu htop neofetch python3-pip xfce4 xfce4-goodies firefox-esr adminer mariadb-server -y

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
wget https://downloads.mysql.com/docs/sakila-db.tar.gz
tar -xvf sakila-db.tar.gz
mysql -uroot -e "create database sakila"
mysql -uroot -proot sakila < /home/vagrant/sakila-db/sakila-schema.sql
mysql -uroot -proot sakila < /home/vagrant/sakila-db/sakila-data.sql

# Baixando e instalando a base de dados world
wget https://downloads.mysql.com/docs/world-db.tar.gz
tar -xvf world-db.tar.gz
mysql -uroot -e "create database world"
mysql -uroot -proot world < /home/vagrant/world-db/world.sql

# Baixando e instalando a base de dados world_x
wget https://downloads.mysql.com/docs/world_x-db.tar.gz
tar -xvf world_x-db.tar.gz
mysql -uroot -e "create database world_x"
mysql -uroot -proot world < /home/vagrant/world_x-db/world_x.sql

# Definindo o fuso horário correto (Recife/PE)
echo "Etc/GMT+3" > /etc/timezone
ln -fs /usr/share/zoneinfo/`cat /etc/timezone` /etc/localtime
dpkg-reconfigure -f noninteractive tzdata

# Instalando o tldr (para obter ajuda rápida sobre comandos)
pip3 install tldr
mv /usr/local/bin/tldr /usr/bin || true

# Instalando um gerenciador de arquivos estilo GUI no terminal
pip3 install TUIFIManager --upgrade

# Definindo o teclado para o padrão abnt2
echo "setxkbmap -model abnt2 -layout br" >> /home/vagrant/.bashrc
. /home/vagrant/.bashrc

echo "Fim do Script"
