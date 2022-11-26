package Pessoas;

public class Juridica extends Pessoa {
    public String cnpj, inscEstadual;

    @Override
    public String toString() {
        return "{" +
            "nome='" + nome + "'" + "\n" +
            "cnpj='" + cnpj + "'" + "\n" +
            "inscEstadual='" + inscEstadual + "'" + "\n" +
            "situacaoPessoa='" + situacaoPessoa + "'" +
            "}";
    }

}
