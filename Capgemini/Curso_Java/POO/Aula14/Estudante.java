package Aula14;

public class Estudante extends Pessoa {
    // Atributos
    private String login;
    private int totAssistido;

    // Métodos
    public void viuMaisUm(){
        this.totAssistido++;
        System.out.println("Total de horas assistidas: " + this.totAssistido);
    }
    // Como a classe mãe possui um construtor, a classe filha também deve ter
    public Estudante(String nome, int idade, String sexo, String login) {
        super(nome, idade, sexo);
        this.login = login;
        this.totAssistido = 0;
    }


    @Override
    public String toString() {
        return "{" + super.toString() +
            " login='" + getLogin() + "'" +
            ", totAssistido='" + getTotAssistido() + "'" +
            "}";
    }


    // Métodos Especiais
    public String getLogin() {
        return this.login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public int getTotAssistido() {
        return this.totAssistido;
    }

    public void setTotAssistido(int totAssistido) {
        this.totAssistido = totAssistido;
    }

}
