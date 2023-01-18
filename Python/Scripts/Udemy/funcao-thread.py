""" Para executar processos paralelos """

from threading import Thread
from threading import Lock
from time import sleep

""" Evita travamento de interface:
deixa o processo executando em segundo plano
enquanto realiza outras tarefas"""


class MeuThread(Thread):

    def __init__(self, texto, tempo):
        self.texto = texto
        self.tempo = tempo

        super().__init__()

    def run(self):
        sleep(self.tempo)
        print(self.texto)


""" Parte 1:
t1 = MeuThread('Thread 1', 2)
t1.start()

t2 = MeuThread('Thread 2', 3)
t2.start()

t3 = MeuThread('Thread 3', 5)
t3.start()

for i in range(20):
    print(i)
    sleep(1)
"""

""" Parte 2:
def vai_demorar(texto, tempo):
    sleep(tempo)
    print(texto)

#!Mensagem aparece no meio do laço for
t1 = Thread(target=vai_demorar, args=('Olá mundo 1', 5))
t1.start()

t2 = Thread(target=vai_demorar, args=('Olá mundo 2', 1))
t2.start()

t3 = Thread(target=vai_demorar, args=('Olá mundo 3', 2))
t3.start()

for i in range(20):
    print(i)
    sleep(.5)
"""

""" Parte 3:

# ! Aguardando a thread terminar
def vai_demorar(texto, tempo):
    sleep(tempo)
    print(texto)

t1 = Thread(target=vai_demorar, args=('Olá mundo 1', 5))
t1.start()

while t1.is_alive():
    print('Esperando...')
    sleep(1)
"""

""" Parte 4 """


class Ingressos:
    """
    Classe que vende ingressos
    """
    def __init__(self, estoque):
        """ Inicializando...
        #! Método lock: Trava a thread
        :param estoque: quantidade de ingressos em estoque
        """
        self.estoque = estoque
        # Nosso cadeado
        self.lock = Lock()

    def comprar(self, quantidade):
        """
        Compra determinada quantidade de ingressos

        :param quantidade: A quantidade de ingressos que deseja comprar
        :type quantidade: int
        :return: Nada
        :rtype: None
        """
        # Tranca o método
        self.lock.acquire()

        if self.estoque < quantidade:
            print('Não temos ingressos suficientes.')
            # Libera o método (usar antes do return)
            self.lock.release()
            return

        sleep(1)

        self.estoque -= quantidade
        print(f'Você comprou {quantidade} ingresso(s). '
              f'Ainda temos {self.estoque} em estoque.')

        # Libera o método
        self.lock.release()


if __name__ == '__main__':
    ingressos = Ingressos(10)

    threads = []  # Lista para manter as threads
    for i in range(1, 20):
        t = Thread(target=ingressos.comprar, args=(i,))
        threads.append(t)

    # Inicia as threads
    for t in threads:
        t.start()

    # Verifica se todas as threads terminaram
    executando = True
    while executando:
        executando = any(t.is_alive() for t in threads)
    print(ingressos.estoque)
