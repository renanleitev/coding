package Polimorfismo;

public class Polimorfismo {
    public static void main(String[] args){
        Mamifero mam01 = new Elefante();
        System.out.println("Cota diária de leite do Elefante é " + 
        mam01.cotaDiariaLeite() + " litros.");

        Mamifero mam02 = new Rato();
        System.out.println("Cota diária de leite do Rato é " + 
        mam02.cotaDiariaLeite() + " litros.");
    }
}
