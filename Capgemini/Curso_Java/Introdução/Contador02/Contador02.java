package Contador02;

import java.util.Scanner;

public class Contador02 {
    public static void main(String[] args) {
        // int cc = 0;
        // do {
        //     System.out.println("Contador nº " + cc);
        //     cc++;
        // }
        // while (cc < 4);
        int n, s = 0;
        String resp;
        try (Scanner tec = new Scanner(System.in)) {
            do{
                System.out.print("Digite um número: ");
                n = tec.nextInt();
                s += n;
                System.out.println("O total da soma é " + s);
                System.out.print("Quer continuar? [S/N] ");
                resp = tec.next();
            } 
            while (resp.equals("S") || resp.equals("s"));
            System.out.println("Fim do programa");
        }

    }
}
