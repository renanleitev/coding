package Aula12;

public class Peixe extends Animal {
    // Atributos
    private String corEscama;

    // Métodos sobrescritos
    @Override
    public void locomover(){
        System.out.println("Nadando...");
    }
    @Override
    public void alimentar(){
        System.out.println("Comendo algas marinhas...");
    }
    @Override
    public void emitirSom(){
        System.out.println("Glub!");
    }
    // Método adicional
    public void soltarBolha(){
        System.out.println("Soltou uma bolha...");
    }

    // Métodos Especiais
    public String getCorEscama() {
        return this.corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }

}
