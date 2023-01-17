package Aula12;

public class Ave extends Animal{
    // Atributos
    private String corPena;

    // Métodos sobrescritos
    @Override
    public void locomover(){
        System.out.println("Voando...");
    }
    @Override
    public void alimentar(){
        System.out.println("Comendo sementes...");
    }
    @Override
    public void emitirSom(){
        System.out.println("Bem-te-vi!");
    }
    // Método adicional
    public void fazerNinho(){
        System.out.println("Construindo um ninho...");
    }

    // Métodos Especiais
    public String getCorPena() {
        return this.corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }

}
