package ProgramaMedia;

import java.util.Scanner;

public class ProgramaMedia {
    public static void main(String[] args) {
        try (Scanner scan = new Scanner(System.in)) {
            System.out.print("Digite o primeiro número: ");
            float n1 = scan.nextFloat();
            System.out.print("Digite o segundo número: ");
            float n2 = scan.nextFloat();
            float media = (n1+n2)/2;
            System.out.println("Média é: " + media);
            if (media > 9){
                System.out.println("A média é maior que 9");
            }
            else{
                System.out.println("A média é menor que 9");
            }
        }
    }
}
