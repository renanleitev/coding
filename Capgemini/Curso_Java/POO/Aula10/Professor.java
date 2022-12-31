package Aula10;

public class Professor extends Pessoa {
    // Atributos
    private String especialidade;
    private float salario;

    // Métodos
    public void ReceberAumento(float aumento){
        this.salario += aumento;
        System.out.println("Parabéns! Você recebeu um aumento de R$ " + aumento +
         " e o seu salário atual é de R$ " + this.salario);
    }

    // Métodos Especiais
    public String getEspecialidade() {
        return this.especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public float getSalario() {
        return this.salario;
    }

    public void setSalario(float salario) {
        this.salario = salario;
    }

}
