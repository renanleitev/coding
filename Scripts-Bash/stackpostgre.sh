#!/bin/bash
cd /home/renan/scripts;
sudo docker stop maria_db adminer_maria;
sudo docker rm maria_db adminer_maria;
sudo docker stop mysql_db adminer_mysql;
sudo docker rm mysql_db adminer_mysql;
sudo docker stop postgre_db adminer_postgre;
sudo docker rm postgre_db adminer_postgre;
sudo docker-compose -f stackpostgre.yml up;
