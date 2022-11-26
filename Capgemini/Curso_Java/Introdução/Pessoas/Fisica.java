package Pessoas;

public class Fisica extends Pessoa {
    public String cpf, identidade;

    public Fisica(String cpf, String identidade) {
        this.cpf = cpf;
        this.identidade = identidade;
    }

    public Fisica() {
    }

    @Override
    public String toString() {
        return "{" +
            "nome='" + nome + "'" + "\n" +
            "cpf='" + cpf + "'" + "\n" +
            "identidade='" + identidade + "'" + "\n" +
            "situação='" + situacaoPessoa + "'" +
             "}";
    }

}
