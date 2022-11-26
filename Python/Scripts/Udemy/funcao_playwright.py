# Playwright = automatizando funções web

# from playwright.sync_api import sync_playwright


# with sync_playwright() as p:
#     nav = p.chromium.launch(headless=False)
#     # Headless = Inicia o navegador sem mostrar a janela
#     # Headless=False = Inicia o navegador mostrando a janela
#     pagina = nav.new_page() # Abre o navegador em uma nova aba
#     pagina.goto("https://g1.globo.com/") # Para ir até um site específico
#     sleep(10)
#     nav.close() # Para fechar o navegador

from playwright.sync_api import sync_playwright
from time import sleep


# with sync_playwright() as p:
#     browser = p.chromium.launch()
#     page = browser.new_page()
#     page.goto("https://g1.globo.com/")
#     # Para imprimir o título da página
#     print(page.title())
#     browser.close()


with sync_playwright() as p:
    nav = p.chromium.launch(headless=False)
    pagina = nav.new_page()
    pagina.goto("https://www.google.com/") # noqa
    # Type = para digitar letra por letra
    pagina.locator('xpath=/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input').type('Hello World!') # noqa
    # Keyboard.press = Pressiona uma tecla (primeira letra em maiúscula)
    pagina.keyboard.press('Enter')
    sleep(5)
    # Fill = Para prencher
    pagina.locator('xpath=//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input').fill('debian') # noqa
    pagina.keyboard.press('Enter')
    sleep(5)
    nav.close()
