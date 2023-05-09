#!/bin/bash

# proxy = Rodar no Code Server
# original = Rodar localmente

if [ $1 = "index.html" ] && [ $2 = "proxy" ]
then
	caminho="$(cd "$(dirname "$1")" && pwd -P)/src/main/resources/templates/$(basename "$1")"
	sed -i "s|reservations|proxy/8080/reservations|" $caminho
	echo "Alterado $1 para o Code Server"
elif [ $1 = "nav.html" ] && [ $2 = "proxy" ]
then
	caminho="$(cd "$(dirname "$1")" && pwd -P)/src/main/resources/templates/fragments/$(basename "$1")"
	sed -i "s|href=\"|href=\"proxy/8080|" $caminho
	echo "Alterado $1 para o Code Server"
elif [ $1 = "index.html" ] && [ $2 = "original" ]
then
	caminho="$(cd "$(dirname "$1")" && pwd -P)/src/main/resources/templates/$(basename "$1")"
	sed -i "s|proxy/8080/reservations|reservations|" $caminho
	echo "Alterado $1 para o link original"
elif [ $1 = "nav.html" ] && [ $2 = "original" ]
then
	caminho="$(cd "$(dirname "$1")" && pwd -P)/src/main/resources/templates/fragments/$(basename "$1")"
	sed -i "s|href=\"proxy/8080|href=\"|" $caminho
	echo "Alterado $1 para o link original"
fi
