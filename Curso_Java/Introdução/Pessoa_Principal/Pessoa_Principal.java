package Pessoa_Principal;

public class Pessoa_Principal {
    public static void main(String[] args){
        // Instanciando uma classe
        Pessoa pes = new Pessoa();

        // Utilizando atributos de uma classe
        // Obs: Quando se torna private, eles não são mais exibidos
        // pes.idadePessoa = 25;
        // pes.nomePessoa = "Renan";

        // Utilizando um método de uma classe
        // pes.MostrarDados(pes.nomePessoa, pes.idadePessoa);
        pes.setIdadePessoa(15);
        pes.setNomePessoa("Renan");
        System.out.println(pes.toString());

    }
}
