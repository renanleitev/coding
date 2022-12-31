package Aula12;

// ! Não pode instanciar classes abstratas!
public abstract class Animal {
    // Atributos
    protected float peso;
    protected int idade;
    protected int membros;

    // Métodos
    // Métodos abstratos = Não precisam especificar funções
    public abstract void locomover();
    public abstract void alimentar(); 
    public abstract void emitirSom();

    // Métodos Especiais
    public float getPeso() {
        return this.peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getMembros() {
        return this.membros;
    }

    public void setMembros(int membros) {
        this.membros = membros;
    }

}
