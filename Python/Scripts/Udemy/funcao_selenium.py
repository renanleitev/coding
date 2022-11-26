# """ Como utilizar o selenium para automatizar tarefas no navegador """
# """ Site utilizado: "https://online8.detran.pe.gov.br/DetranPessoal" """

# """ OBS: Selenium é utilizado apenas para automatizar tarefas no navegador,
# Pyautogui automatiza o navegador e outras tarefas do computador """

# """ Todas vez que utilizar o selenium:
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager
# from time import sleep

# options = webdriver.ChromeOptions()
# options.add_argument("--start-maximized")
# options.add_argument("--disable-gpu")
# options.add_argument("--no-sandbox")

# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), chrome_options=options) # noqa

# """

# """ Atalhos: Selenium
# driver.find_element(By.
# ID = "id"
# NAME = "name"
# XPATH = "xpath"
# LINK_TEXT = "link text"
# PARTIAL_LINK_TEXT = "partial link text"
# TAG_NAME = "tag name"
# CLASS_NAME = "class name"
# CSS_SELECTOR = "css selector"

# Exemplo:

# find_element(By.ID, "id")
# find_element(By.NAME, "name")
# find_element(By.XPATH, "xpath")
# find_element(By.LINK_TEXT, "link text")
# find_element(By.PARTIAL_LINK_TEXT, "partial link text")
# find_element(By.TAG_NAME, "tag name")
# find_element(By.CLASS_NAME, "class name")
# find_element(By.CSS_SELECTOR, "css selector")

# """ Criar uma classe para organizar melhor o código """


# class Driver():
#     """ Para impedir de fechar automaticamente """
#     def iniciar():
#         global driver

#     """ Para abrir qualquer página """
#     def abrir(self, site):
#         driver.get(site)

#     """ Para clicar em um elemento visual do site """
#     def clica(self):
#         try:
#             """ Por nome """
#             btn_menu = driver.find_element("link text", "palavra_chave")
#             btn_menu.click()
#         except Exception as e:
#             print('Erro ao clicar:', e)
#     """ Para logar no sistema """
#     def login(self):
#         try:
#             """ Por id = Utilize o inspetor do Google Chrome para
#                 visualizar o CSS do elemento desejado"""
#             login = driver.find_element('id', 'Usuario_CpfCnpj')
#             login.send_keys('60916783375')
#             sleep(2)
#             senha = driver.find_element('id', 'Usuario_Senha')
#             sleep(2)
#             senha.send_keys('170997')
#             """ Por css selector = Utilizando o inspetor, selecione
#             o elemento desejado e clique em Copiar -> Copiar seletor """
#             sleep(2)
#             btn_esquece = driver.find_element(By.CSS_SELECTOR, 'body > div > div > div > div > form > div > a:nth-child(3)') # noqa
#             btn_esquece.click()
#         except Exception as e:
#           print('Erro ao logar:', e)
#     """ Após logar, para verificar se o usuário é válido """
#     """ No exemplo do Detran, não é necessário """
#     # def verifica_usario(self, usuario):
#     #     """ Por class name = Nome da classe que aparece no inspetor """
#           profile_link = driver.find_element(By.CLASS_NAME,'Usuario_CpfCnpj')
#     #     profile_link_html = profile_link.get_attribute('innerHTML')
#     #     assert usuario in profile_link_html
#     def tecla(self):
#         """ Para usar alguma tecla """
#         driver.set_keys(Keys.ENTER)
#     def fecha(self):
#         """ Para fechar o navegador """
#         driver.quit()

# if __name__ == "__main__":
#     nav = Driver()
#     nav.abrir("https://online8.detran.pe.gov.br/DetranPessoal")
#     # nav.clica()
#     nav.login()
#     # nav.verifica_usario('60916783375')
