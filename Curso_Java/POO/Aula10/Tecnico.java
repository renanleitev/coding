package Aula10;

public class Tecnico extends Pessoa {
    private int registro;

    public void praticar(){
        System.out.println("O técnico " + getNome() + " está praticando...");
    }

    public int getRegistro() {
        return this.registro;
    }

    public void setRegistro(int registro) {
        this.registro = registro;
    }

}
