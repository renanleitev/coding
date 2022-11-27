package Aula10;

public class Funcionario extends Pessoa {
    // Atributos
    private String setor;
    private boolean trabalhando;

    // Métodos
    public void mudarTrabalho(){
        this.trabalhando = ! this.trabalhando;
        if (this.trabalhando == true){
            System.out.println("O funcionário está trabalhando");
        }
        else{
            System.out.println("O funcionário não está trabalhando");
        }
    }

    // Métodos Especiais
    public String getSetor() {
        return this.setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public boolean getTrabalhando() {
        return this.trabalhando;
    }

    public void setTrabalhando(boolean trabalhando) {
        this.trabalhando = trabalhando;
    }

}
