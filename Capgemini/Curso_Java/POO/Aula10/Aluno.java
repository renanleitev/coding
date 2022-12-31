package Aula10;

public class Aluno extends Pessoa {
    // Atributos
    private int matricula;
    private String curso;

    // Métodos
    public void cancelarMatricula(){
        System.out.println("Matricula de " + getNome() + " cancelada com sucesso!");
    }
    public void pagarMensalidade(){
        System.out.println("Mensalidade do aluno " + getNome() + " paga com sucesso!");
    }

    // Métodos Especiais

    public int getMatricula() {
        return this.matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public String getCurso() {
        return this.curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

}
