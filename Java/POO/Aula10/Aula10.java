package Aula10;

public class Aula10 {
    public static void main(String[] args) {
        // Criando os objetos
        // ! Classes Abstratas não podem ser instanciadas!
        // Pessoa p1 = new Pessoa();
        // p1.setNome("Renan");
        // p1.setSexo("M");
        // p1.setIdade(25);

        Visitante v1 = new Visitante();
        v1.setNome("Paulo");
        v1.setSexo("M");
        v1.setIdade(27);
        System.out.println(v1.toString());

        Bolsista b1 = new Bolsista();
        b1.setNome("Julio");
        b1.setMatricula(1112);
        b1.setBolsa(12.5f);
        b1.setSexo("M");
        b1.pagarMensalidade();

        Aluno p2 = new Aluno();
        p2.setNome("Maria");
        p2.setSexo("F");
        p2.setIdade(17);
        p2.setCurso("Informática");
        p2.pagarMensalidade();

        Professor p3 = new Professor();
        p3.setNome("Pedro");
        p3.setSexo("M");
        p3.setIdade(45);
        p3.setSalario(2250.75f);

        Funcionario p4 = new Funcionario();
        p4.setNome("Lucia");
        p4.setSexo("F");
        p4.setIdade(32);
        p4.setSetor("Estoque");

        // System.out.println(p1.toString());
        // System.out.println(p2.toString());
        // System.out.println(p3.toString());
        // System.out.println(p4.toString());
    }
}
