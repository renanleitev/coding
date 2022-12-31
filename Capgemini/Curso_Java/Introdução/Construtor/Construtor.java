package Construtor;
import Construtor.Aluno.STATUS;
import Construtor.Aluno.MATRICULA;

public class Construtor {
    
    public static void main(String[] args){
        // passando os dados através do construtor
        Aluno alu = new Aluno(8, 8, 8);
        
        // calculando a média
        double mediaAlunoFinal = alu.calcularMediaAluno();

        // definindo a situação do aluno
        if (mediaAlunoFinal < 6) {
            alu.situacaoAluno = STATUS.REPROVADO;
        } else {
            alu.situacaoAluno = STATUS.APROVADO;
        }

        // imprimindo situação do aluno
        System.out.println("A média do aluno é: " + alu.calcularMediaAluno() +
        " e o aluno está " + alu.situacaoAluno);

        // USA ENUM MATRICULA
        alu.situacaoMatricula = MATRICULA.MATRICULADO;
        System.out.println("O alundo está " + alu.situacaoMatricula);
    }
}
