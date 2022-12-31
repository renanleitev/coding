#!/bin/bash
if [[ $(sudo docker ps | grep --only-matching code-server) ]];
then sudo docker stop code-server;
else sudo docker start code-server; fi
