package ProgramaPernas;

import java.util.Scanner;

public class ProgramaPernas {
    public static void main(String[] args) {
        try (Scanner scan = new Scanner(System.in)) {
            System.out.print("Quantas pernas? ");
            int perna = scan.nextInt();
            String tipo;
            System.out.print("Isso é um(a) ");
            // Cada switch termina com um break
            // Serve apenas para numeros inteiros, não reais
            // Não serve para intervalos (cada número deve ser digitado)
            switch (perna) {
                // if perna = 1
                case 1:
                    tipo = "Saci";
                    break;
                // else if perna = 2
                case 2:
                    tipo = "Bipede";
                    break;
                // else if perna = 3
                case 3:
                    tipo = "Tripé";
                    break;
                // else if perna = 4
                case 4:
                    tipo = "Quadrupede";
                    break;
                // else if perna = 6
                case 6:
                    tipo = "Aranha";
                    break;
                // else
                default:
                    tipo = "ET";
                    break; 
            }
            System.out.println(tipo);
        }
    }
}
