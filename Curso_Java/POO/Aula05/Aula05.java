package Aula05;

public class Aula05 {
    public static void main(String[] args) {
        // Definindo as contas bancárias
        ContaBanco b1 = new ContaBanco();
        b1.setNumConta(1111);
        b1.setDono("Renan");
        // Conta Corrente começa com 50 reais
        b1.abrirConta("CC");

        ContaBanco b2 = new ContaBanco();
        b2.setNumConta(2222);
        b2.setDono("Maria");
        // Conta Poupança começa com 150 reais
        b2.abrirConta("CP");

        // Realizando operações bancárias
        b1.depositar(100);
        b2.depositar(500);
        b2.sacar(100);
        b1.sacar(150);

        // Fechando as contas
        b1.fecharConta();

        // Analisando o estado das contas
        b1.status();
        b2.status();
    }
}
