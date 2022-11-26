A = int(input('Diga um ano: '))
# if (((A%4)==0) and (((A%400)==0)) or ((A%100)!=0)):
#     print(f'O ano {A} é bissexto')
# else:
#     print(f'O ano {A} não é bissexto')
if (A%4)==0:
    if ((A%400)==0) or ((A%100)!=0):
        print(f'O ano {A} é bissexto')
    else:
        print(f'O ano {A} não é bissexto')


