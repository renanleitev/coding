print('Você se inscreveu para uma competição de natação.')
print('Dependendo da sua idade, você deverá entrar em uma categoria específica.')
A = int(input('Diga o ano em que você nasceu: '))
B = int(2022-A)
if B <= 9:
    print(f'Você tem {B} anos. Você irá competir na categoria mirim.')
elif B <= 14:
    print(f'Você tem {B} anos. Você irá competir na categoria infantil.')
elif B <= 19:
    print(f'Você tem {B} anos. Você irá competir na categoria junior.')
elif B <=20:
    print(f'Você tem {B} anos. Você irá competir na categoria sênior.')
else:
    print(f'Você tem {B} anos. Você irá competir na categoria master.')