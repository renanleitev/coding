A = int(input('Diga um número: '))
B = int(input('Diga outro número: '))
if A > B:
    print(f'O número {A} é maior que {B}.')
elif B > A:
    print(f'O número {B} é maior que {A}.')
elif A==B:
    print(f'O número {A} é igual a {B}.')