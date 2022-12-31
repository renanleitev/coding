package Aula02;

public class Aula02 {
    public static void main(String[] args) {
        // Instanciando um objeto
        Caneta c1 = new Caneta();
        // ! Atributos públicos podem ser chamados
        // ! por qualquer classe
        c1.cor = "azul";
        c1.modelo = "bic";
        // ! Atributos privados não podem ser chamados
        // c1.ponta = 0.5f;
        // ! Atributos protegidos só podem ser chamados
        // ! dentro da mesma instância ou por herança
        c1.carga = 80;
        // Não posso mexer em tampada, pois é privado
        // c1.tampada = true;
        // Mas posso chamar o método, que mexe dentro da classe
        c1.tampar();
        c1.destampar();
        // c1.status();
        // c1.rabiscar();
        c1.status();

        // Instanciando um novo objeto
        // Caneta c2 = new Caneta();
        // c2.cor = "preta";
        // c2.ponta = 1.5f;
        // c2.modelo = "compact";
        // c2.carga = 50;
        // c2.destampar();
        // c2.status();
        // c2.rabiscar();
    }
}
