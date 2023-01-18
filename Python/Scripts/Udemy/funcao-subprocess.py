""" Para testar servidores (Ex: ping) """

import subprocess

""" Ping:
Windows: ping 127.0.0.1
Linux: ping 127.0.0.1 -c 4
"""

""" Testando o ping """
proc = subprocess.run(
    ['ping', '127.0.0.1'],
    capture_output=True,
    text=True)

""" Stdout = Para manipular o processo """
saida = proc.stdout.replace('127.0.0.1', 'Renan')

""" Para emitir os dados alinhados """
print(saida)
