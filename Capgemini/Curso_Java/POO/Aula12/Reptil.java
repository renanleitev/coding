package Aula12;

public class Reptil extends Animal {
    // Atributos
    private String corEscama;

    // Métodos sobrescritos
    @Override
    public void locomover(){
        System.out.println("Rastejando...");
    }
    @Override
    public void alimentar(){
        System.out.println("Comendo vegetais...");
    }
    @Override
    public void emitirSom(){
        System.out.println("Ssshhh!");
    }

    // Métodos Especiais
    public String getCorEscama() {
        return this.corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }


}
