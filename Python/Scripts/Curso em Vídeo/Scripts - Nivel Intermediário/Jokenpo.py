import random
print('Vamos jogar Jokenpô!')
ESC = str((input('Escolha pedra, papel ou tesoura: ')).lower())
LISTA = ['pedra', 'papel', 'tesoura']
COMP = random.choice(LISTA)
if COMP == ESC:
    print(f'Empate! O computador escolheu {COMP} e você escolheu {ESC}.')
elif COMP == 'pedra' and ESC == 'papel':
    print(f'Você ganhou! O computador escolheu {COMP} e você escolheu {ESC}.')
elif COMP == 'pedra' and ESC == 'tesoura':
    print(f'Você perdeu! O computador escolheu {COMP} e você escolheu {ESC}.')
elif COMP == 'papel' and ESC == 'pedra':
    print(f'Você perdeu! O computador escolheu {COMP} e você escolheu {ESC}.')
elif COMP == 'papel' and ESC == 'tesoura':
    print(f'Você ganhou! O computador escolheu {COMP} e você escolheu {ESC}.')
elif COMP == 'tesoura' and ESC == 'pedra':
    print(f'Você ganhou! O computador escolheu {COMP} e você escolheu {ESC}.')
elif COMP == 'tesoura' and ESC == 'papel':
    print(f'Você perdeu! O computador escolheu {COMP} e você escolheu {ESC}.')

