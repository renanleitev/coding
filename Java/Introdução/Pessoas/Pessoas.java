package Pessoas;

public class Pessoas {
    public static void main(String[] args) {
        Fisica fis = new Fisica();
        fis.nome = "Renan";
        fis.cpf = "60916783375";
        fis.identidade = "20080040530";
        fis.situacaoPessoa = "ATIVA";

        Juridica jur = new Juridica();
        jur.nome = "Petrobras SA";
        jur.cnpj = "123456789";
        jur.inscEstadual = "789456123";
        jur.situacaoPessoa = "INATIVA";

        System.out.println("Dados pessoa física: ");
        System.out.println(fis.toString());
        System.out.println("Dados pessoa jurídica: ");
        System.out.println(jur.toString());
    }

}
