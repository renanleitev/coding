from string import Template
from datetime import datetime

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
# from email.mime.image import MIMEImage
import smtplib

""" Como enviar um email com Python """
""" OBS: Melhor usar o Pyautogui ou Selenium """

""" Credenciais do remetente """
meu_email = 'SEUEMAIL@GMAIL.COM'
minha_senha = 'SUASENHA'

""" Abrir o template da mensagem """
with open('template.html', 'r') as html:
    template = Template(html.read())
    data_atual = datetime.now().strftime('%d/%m/%Y')
    corpo_msg = template.substitute(nome='Luiz Otávio', data=data_atual)

""" Credenciais do destinatário """
msg = MIMEMultipart()
msg['from'] = 'SEU NOME'
msg['to'] = 'EMAILDOCLIENTE@GMAIL.COM'  # Cliente
msg['subject'] = 'ASSUNTO DO E-MAIL'

corpo = MIMEText(corpo_msg, 'html')
msg.attach(corpo)

""" ENVIO DE IMAGEM EM ANEXO """
# with open('IMAGEM.JPG', 'rb') as img:
#     img = MIMEImage(img.read())
#     msg.attach(img)

""" Porta do gmail (cada email tem host e port únicos) """
with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
    try:
        """ Mensagem de hello para o servidor """
        smtp.ehlo()
        """ Inicia a conexão """
        smtp.starttls()
        """ Faz o login """
        smtp.login(meu_email, minha_senha)
        """ Envia a mensagem """
        smtp.send_message(msg)
        print('E-mail enviado com sucesso.')
    except Exception as e:
        print('E-mail não enviado...')
        print('Erro:', e)
