package OperadorTernario;

public class OperadorTernario {
    public static void main(String[] args) {
        // Se n1 for maior que n2, ele recebe 0
        // senão, ele recebe 1
        int n1 = 4, n2 = 8, resultado, operacao;
        resultado = (n1>n2)?0:1;
        operacao = (n1 > n2)?n1+n2:n1-n2;
        System.out.println("O resultado é: " + resultado);
        System.out.println("A operação é: " + operacao);
    }
}
