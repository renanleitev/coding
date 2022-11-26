from abc import abstractmethod


class Conta:
    """
    Módulo para testar funções bancárias.

    Com esse módulo, posso testar funções de saque, depósito, etc.
    """
    def __init__(self, agencia, conta, saldo):
        # Setters
        self._agencia = agencia
        self._conta = conta
        self._saldo = saldo

    # Getters
    @property
    def agencia(self):
        """ def agencia(self): Informa o número da agência """
        return self._agencia

    # Getters
    @property
    def conta(self):
        """ def conta(self): Informa o número da conta """
        return self._conta

    # Getters
    @property
    def saldo(self):
        """ def saldo(self): Informa o saldo da conta """
        return self._saldo

    @saldo.setter
    def saldo(self, valor):
        if not isinstance(valor, (int, float)):
            raise ValueError("Saldo deve ser numérico")
        self._saldo = valor

    def depositar(self, valor):
        """ def depositar(self, valor): Adiciona o depósito ao saldo"""
        if not isinstance(valor, (int, float)):
            raise ValueError("Depósito deve ser numérico")
        self.saldo += valor
        self.detalhes()

    def detalhes(self):
        """ def detalhes(self): Informa os detalhes da conta """
        print(f'Agência: {self.agencia}\n')
        print(f'Conta: {self.conta}\n')
        print(f'Saldo: {self.saldo}')

    # Classe Abstrata
    @abstractmethod
    def sacar(self, valor):
        self.detalhes()
