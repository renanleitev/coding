lista = ['Nome', 'Kagggle', 
            'Emitido em ago de 2022 · Sem data de expiração', 
            'Código da credencial: 002', 'Nome', 'IRFS', 
            'Emitido em ago de 2022 · Sem data de expiração', 'Nome',
            'IRFS', 
            'Emitido em ago de 2022 · Sem data de expiração']
inicio = defasagem = 0
for c in lista[(0+inicio+defasagem):(4+inicio+defasagem)]:
    try:
        if 'Código da credencial' not in lista[3+inicio+defasagem]:
            lista.insert(3+inicio+defasagem, 'Sem código')
            defasagem += 1
        else:
            pass
    except Exception:
        pass
    inicio += 4
if 'Código da credencial' or 'Sem código' not in lista[-1]:
    lista.append('Sem código')
print(lista)

# 0, 1, 2, 3
# 4, 5, 6, 7
# 8, 9, 10, 11