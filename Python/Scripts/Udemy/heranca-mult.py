""" Herança Múltipla """


class A:
    def falar(self):
        print('Classe A está falando...')


class B(A):
    def falar(self):
        print('Classe B está falando...')


class C(A):
    def falar(self):
        print('Classe C está falando...')


# class D(B,C): # Ordem de preferência: da esquerda pra direita (B -> C - > A)
#     # Se tiver alguma função, executa ela:
#     def falar(self):
#         print('Classe D está falando...')
#         # Se não tiver: executa Classe A (superclasse)
#         # pass

# Agora C é executado primeiro
class D(C, B):
    pass


d = D()
d.falar()
