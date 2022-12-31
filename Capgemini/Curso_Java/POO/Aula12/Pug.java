package Aula12;

// Polimorfismo de sobrecarga

public class Pug extends Cachorro{
    public void reagir(String frase){
        if (frase == "comida" || frase == "olá"){
            System.out.println("Abanar e Latir");
        }
        else{System.out.println("Rosnar");}
    }
    public void reagir(int hora){
        if (hora<12){
            System.out.println("Abanar");
        }
        else if (hora >= 18){
            System.out.println("Ignorar");
        }
        else{
            System.out.println("Abanar e latir");
        }
    }
    public void reagir(boolean dono){
        if (dono){
            System.out.println("Abanar");
        }
        else{
            System.out.println("Rosnar e latir");
        }
    }
    public void reagir(int idade, float peso){
        if (idade < 5){
            if (peso < 10){
                System.out.println("Abanar");
            }
            else{
                System.out.println("Latir");
            }
        }
        else{
            if (peso < 10){
                System.out.println("Rosnar");
            }
            else{
                System.out.println("Ignorar");
            }
        }
    }
}
