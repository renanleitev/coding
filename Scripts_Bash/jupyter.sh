#!/bin/bash
if [[ $(sudo docker ps | grep --only-matching jupyter) ]];
then sudo docker stop jupyter;
else sudo docker start jupyter; fi
