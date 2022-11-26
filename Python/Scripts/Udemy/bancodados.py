def perguntar():
    return input("O que deseja realizar?\n<I> - Para Inserir um usuário\n<P> - Para Pesquisar um usuário\n<E> - Para Excluir um usuário\n<L> - Para Listar um usuário\n<U> - Quanto tempo desde o último acesso\n<R> - Qual é o acesso mais recente\nSua opção: ").upper() # noqa


def inserir(dicionario):
    dicionario[input("Login: ").upper()] = [input("Nome: ").upper(),
                                            input("Último ano: "),
                                            input("Última estação: ").upper()]


def pesquisar(dicionario, chave):
    lista = dicionario.get(chave)

    if lista is not None:
        print(f"Nome...............: {lista[0]}")
        print(f"Último acesso (ano): {lista[1]}")
        print(f"Última estação.....: {lista[2]}")


def excluir(dicionario, chave):
    if dicionario.get(chave) is not None:
        del dicionario[chave]
    print("Usuário Eliminado")


def listar(dicionario):
    for chave, valor in dicionario.items():
        print("Processando......")
        print("Login: ", chave)
        print("Dados: ", valor)


def ultimo(dicionario):
    from datetime import datetime
    listamaior = []
    anomaior = []
    for c in dicionario.values():
        a = list(c)
        for x in a:
            if x.isnumeric():
                anomaior.append(int(x))
                listamaior.append(datetime.now().year - int(x))
    print(f'Último acesso: {min(anomaior)}, a {max(listamaior)} anos.')


def recente(dicionario):
    from datetime import datetime
    listamenor = []
    anomenor = []
    for c in dicionario.values():
        a = list(c)
        for x in a:
            if x.isnumeric():
                anomenor.append(int(x))
                listamenor.append(datetime.now().year - int(x))
    print(f'Acesso mais recente: {max(anomenor)}, a {min(listamenor)} anos.')


usuarios: dict[str, int]

usuarios = {}

opcao = perguntar()

while opcao in ["I", "P", "E", "L", "U", "R"]:
    if opcao == "I":
        inserir(usuarios)
    if opcao == "P":
        pesquisar(usuarios, input("Qual login deseja pesquisar? "))
    if opcao == "E":
        excluir(usuarios, input("Qual login deseja excluir? "))
    if opcao == "L":
        listar(usuarios)
    if opcao == "U":
        ultimo(usuarios)
    if opcao == "R":
        recente(usuarios)
    opcao = perguntar()
