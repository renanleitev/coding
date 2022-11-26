package Vetor01;

import java.util.Arrays;

public class Vetor01 {
    public static void main(String[] args) {
        // int n[] = new int[4];
        int numero[] = {122, 27, 56, 390, 41};
        // Como obter os valores da lista (vetor)
        for(int c=0; c<numero.length; c++){
            System.out.println(numero[c]);
        }
        System.out.println("Cumprimento da lista: " + numero.length);

        // Binary Search = Procura a posição do valor
        // Divide a lista na metade (só funciona com lista de números ímpares)
        // int posicao01 = Arrays.binarySearch(numero, 390);
        // System.out.println("Encontrei o valor na posição " + posicao01);

        // Outro Método (colocando em ordem crescente)
        Arrays.sort(numero);
        for (int valor: numero){
            System.out.println(valor);
        }
        // Leva em consideração o arranjo anterior do Arrays
        int posicao02 = Arrays.binarySearch(numero, 390);
        System.out.println("Encontrei o valor na posição " + posicao02);

        // Preenchendo a lista automaticamente
        int vetor[] = new int[20];
        // Preenche o vetor com o valor 0
        Arrays.fill(vetor, 0);
        for (int valor: vetor){
            System.out.println(valor);
        }
    }
}
