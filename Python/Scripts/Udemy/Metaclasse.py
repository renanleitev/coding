# Metaclasse: A classe de todas as classes
# !EM PYTHON, TUDO É UM OBJETO: INCLUINDO AS CLASSES!

# !Exemplo de Metaclasse:

# class Pai:
#     nome = 'Teste'
# # O type pode ser usado como metaclasse


# A = type('A', (Pai,), {'attr': 'Olá'})


# # Type criou uma classe "A", que recebeu a classe "Pai"
# a = A()
# print(a.nome)

# # !Metaclasse em conjunto com outras classes:


# class Meta(type):
#     def __new__(mcs, name, bases, namespace):
#         # sourcery skip: class-method-first-arg-name
#         if name == 'A':
#             return type.__new__(mcs, name, bases, namespace)
#         if 'attr_classe' in namespace:
#             print(f'{name} tentou sobrescrever o atributo')
#             # remove qualquer alteração na classe mãe
#             del namespace['attr_classe']

#         return type.__new__(mcs, name, bases, namespace)


# class A(metaclass=Meta):
#     attr_classe = 'valor A'


# class B(A):
#     # Se for igual a A, executa B (sobrescreve atributo de A)
#     attr_classe = 'valor B'
#     # Se for diferente de A, executa A (puxa atributo de A)
#     # attr_classex = 'valor B'


# class C(B):
#     attr_classe = 'valor C'


# b = B()
# print(b.attr_classe)
# c = C()
# print(c.attr_classe)
