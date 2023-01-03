# Debian Xfce pré-configurado para programação

Debian Xfce pré-configurado para programação, com uso de Vagrant e Oracle VirtualBox.

Softwares Pré-instalados: 

- Para programação: Visual Studio Code, Sublime Text, Eclipse, Netbeans.

## Pré-requisitos

1) VirtualBox:

    [Downloads – Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads)

2) Vagrant:

    [Download | Vagrant | HashiCorp Developer](https://developer.hashicorp.com/vagrant/downloads)

3) Windows: Habilitar a virtualização por Hyper-V

    [Habilitar o Hyper-V no Windows 10 | Microsoft Learn](https://learn.microsoft.com/pt-br/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
 
 4) Linux: Em caso de erro/conflito com outros hipervisores

    [Install | Vagrant | HashiCorp Developer](https://developer.hashicorp.com/vagrant/docs/installation)

## Instalação 
1) Baixe a pasta "compartilhado" e os arquivos "script.sh" e "Vagrantfile" do repositório abaixo:

    [coding/Ansible - Vagrant/debian-xfce at main · renanleitev/coding (github.com)](https://github.com/renanleitev/coding/tree/main/Ansible%20-%20Vagrant/debian-xfce)

2) Acesse a pasta em que você baixou os arquivos pelo terminal (CMD/Powershell):

![How to Add Open Windows Terminal Here Option to Right-click Menu](https://i0.wp.com/windowsloop.com/wp-content/uploads/2020/01/open-Windows-terminal-here-Windows-featured.png?fit=1500%2C844&ssl=1)

3) No terminal do host (Windows/Linux), digite:

    vagrant up

4) Aguarde a instalação e a configuração da máquina virtual (pode demorar entre 10 a 15 minutos, a depender da conexão da internet)

    Observação: Esse processo é lento apenas durante a primeira instalação, na próxima inicialização o processo é mais rápido!

5) Após a conclusão, reinicie a máquina virtual para ativar a interface gráfica:

    vagrant reload

6) Para acessar a máquina virtual:

- user/login: vagrant
- senha/password: vagrant 

7) Para desligar a máquina virtual:

    vagrant halt

8) Para apagar a máquina virtual:

    vagrant destroy

## Programas instalados e configuração da VM

1) Edite a lista de programas instalados em "script.sh": 

- **xfce4** (para ter uma interface gráfica no Debian)
- **xfce4-goodies** (opcional, para ter aplicativos adicionais do Xfce)
- **firefox-esr** (apenas se quiser usar o banco de dados)
- **deb-get** (para instalar o Visual Studio Code)
- **Visual Studio Code** (IDE de propósito genérico)
- **Sublime Text** (IDE de propósito genérico)
- **Eclipse** (IDE voltada para Java)
- **Netbeans** (IDE voltada para Java)

2) Edite as configurações da VM em "Vagrantfile":

- **Memória RAM** (recomendado: 2 gb). Altere para valores maiores, se tiver memória RAM disponível. Ex: '4096' = 4gb de RAM.	 

    vb.memory = '2048' 

- **IP** (para acessar a máquina virtual pelo navegador ou por SSH). Pode ser qualquer endereço de IP, desde que seja da sua rede local.

    ip: "192.168.60.9"

- **Pasta compartilhada** (para compartilhar arquivos entre a máquina virtual e o host). Pode ser qualquer pasta, desde que o caminho esteja correto. Padrão: host = pasta "compartilhado", na pasta onde se encontram os arquivos "script.sh" e "Vagrantfile" / guest = pasta "/home/vagrant".

    synced_folder "compartilhado/", "/home/vagrant"

## Outras configurações

1) Os arquivos "script.sh" e "Vagrantfile" podem ser modificados livremente, para retirar e/ou acrescentar configurações extras.

2) A máquina virtual pode ser configurada e alterada pelo VirtualBox, mas é recomendado utilizar os comandos padrões do Vagrant, pelo terminal. 
