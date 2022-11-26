A = float(input('Qual é a distância da sua viagem? '))
B = (A*0.50)
C = (A*0.45)
if A <= 200:
    print(f"A sua viagem de {A} km vai custar R$ {B} de pedágio.")
else:
    print(f'A sua viagem de {A} km vai custar  R$ {C} de pedágio.')