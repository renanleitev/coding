package condicional;

public class condicional {
    public static void main(String[] args) {
        int num01 = 2, num02 = -2;
        // Estrutura condicional (parecido com C)
        if (num01 == num02) {
            System.out.println("Os números são iguais.");
        }

        else if (num01 > num02) {
            System.out.println("O primeiro número é maior.");
        }

        else if (num01 != num02) {
            System.out.println("Os números são diferentes.");
        }

        // Estrutura composta (e = &&, ou = ||)
        if (num01 > 0 && num02 > 0) {
            System.out.println("Ambos os números são maiores que zero.");
        }
        else if (num01 > 0  || num02 > 0) {
            System.out.println("Um dos números é maior que zero.");
        }
    }
}
