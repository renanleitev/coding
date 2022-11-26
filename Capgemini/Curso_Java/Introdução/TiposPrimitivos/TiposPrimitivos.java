package TiposPrimitivos;

import java.util.Scanner;

public class TiposPrimitivos {
    public static void main(String[] args) {
        try (// Importando o Scanner
        Scanner teclado = new Scanner(System.in)) {
            // Atribuindo as variáveis
            // System.out.print("Digite o seu nome: ");
            // String nome = teclado.nextLine();
            // System.out.print("Digite a sua nota (Ex: 8,5): ");
            // float nota = teclado.nextFloat();
            String nome = "renan";
            float nota = 8.5f;

            // Convertendo integer para string
            int idade = 30;
            String valor = Integer.toString(idade);
            // Convertendo string para integer
            String num = "90";
            int peso = Integer.parseInt(num);

            // Print normal
            System.out.println("Sua nota é: " + nota);
            System.out.println("Sua idade é: " + idade);
            System.out.println("Sua idade é: " + valor);
            System.out.println("Seu peso é: " + peso + " kg");
            // Print formatado
            System.out.printf("Nota: %.2f", nota);
            // Usando múltiplas variáveis no mesmo print
            System.out.println("");
            System.out.printf("A nota de %s é %.4f", nome, nota);
            System.out.println("");
            System.out.format("A nota de %s é %.4f", nome, nota);
        }
    }
}
