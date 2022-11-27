package OperadoresAritmeticos;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        // int n1 = 3, n2 = 5;
        // O número não é incrementado/decrementado (precisa de loop)
        // int valor = 5 + n2++;
        // O número é incrementado/decrementado (não precisa de loop)
        // ++ = Soma mais um (a = a + 1)
        // -- = Subtrai menos um (a = a - 1)
        // int incrementa = 5 + ++n2;
        // int decrementa = 5 - --n1;
        // float media = (n1 + n2) / 2;
        // System.out.println("A média é: " + media);
        // System.out.println("O incremento é: " + incrementa);
        // System.out.println("O decremento é: " + decrementa);

        // Arredondando números
        // float valor = 8.4f;
        // Arredondando para baixo
        // int arredonda = (int) Math.floor(valor);
        // Arredondando para cima
        // int arredonda = (int) Math.ceil(valor);
        // Arredondando para o valor mais próximo 
        // (0 até 0,5 = para baixo / 0,5 até 1 = para cima)
        // int arredonda = (int) Math.round(valor);
        // System.out.format("O valor original é %f e o valor arredondado é %d", valor, arredonda);

        // Gerando números aleatórios
        // Math.round() = Gera um número entre 0 e 1
        // No caso, pode gerar entre 0 e 100 (multiplica por 100)
        // double aleatorio = Math.random()*100;
        // Gerando entre dois intervalos
        double aleatorio = Math.random();
        // Macete = PrimeiroIntervalo + aleatorio * (UltimoIntervalo - PrimeiroIntervalo)
        int intervalo01 = 15, intervalo02 = 50;
        int numero = (int) (intervalo01 + aleatorio * (intervalo02 - intervalo01));

        System.out.format("O número gerado é %d", numero);
    }
}
