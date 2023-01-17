package Construtor;

public class Aluno {
    private double nota1;
    private double nota2;
    private double nota3;
    STATUS situacaoAluno;
    MATRICULA situacaoMatricula;

    public Aluno(double nota1, double nota2, double nota3){
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    // Enum = Cria uma lista/tabela temporária 

    // DEFININDO UM NUMERADOR
    public enum STATUS{
        APROVADO,
        REPROVADO
    }

    // MATRICULA
    public enum MATRICULA{
        MATRICULADO,
        PENDENTE,
        RECUSADO
    }

    // Método para calcular média do aluno
    public double calcularMediaAluno(){
        double mediaAluno = 0;
        // calcularMediaAluno()
        mediaAluno = (this.nota1 + this.nota2 + this.nota3) / 3;
        return mediaAluno;
    }


}
