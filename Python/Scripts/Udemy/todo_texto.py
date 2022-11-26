# Como copiar todo o texto de um site
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager
import pyperclip
import pyautogui as pg


# options = webdriver.ChromeOptions()
# options.add_argument("--start-maximized")
# options.add_argument("--disable-gpu")
# options.add_argument("--no-sandbox")

# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), chrome_options=options) # noqa


# class Driver():
#     """ Para impedir de fechar automaticamente """
#     def iniciar(self):
#         global driver

#     """ Para abrir qualquer página """
#     def abrir(self, site):
#         driver.get(site)

#     def copiar(self):
#         element = driver.find_element(By.XPATH, "/html/body")
#         print(element.text)


# if __name__ == "__main__":
#     nav = Driver()
#     nav.abrir("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal") # noqa
#     nav.copiar()
pg.hotkey('ctrl', 'a')
pg.hotkey('ctrl', 'c')
x = str(pyperclip.paste())
with open('todotexto.txt', 'a', encoding='utf-8') as file:
    file.write(x)
print('fim')