package Aula04;

public class Aula04 {
    public static void main(String[] args) {
        Caneta c1 = new Caneta("Bic", "Verde", 0.4f);
        // Definindo um atributo com set
        // c1.setModelo("Bic");
        // Em atributos privados, usar set para definir o atributo
        // c1.ponta = 0.5f;
        // c1.setPonta(0.5f);
        // System.out.println(c1.getModelo());
        // System.out.println(c1.getPonta());
        c1.status();

    }
}
