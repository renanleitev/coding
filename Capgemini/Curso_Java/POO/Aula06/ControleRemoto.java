package Aula06;

public class ControleRemoto implements Controlador {
    // Atributos
    private int volume;
    private boolean ligado;
    private boolean tocando;

    // Método Construtor
    public ControleRemoto(){
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    
    }
    // Métodos Especiais
    private int getVolume() {
        return this.volume;
    }
    private boolean getLigado() {
        return this.ligado;
    }
    private boolean getTocando() {
        return this.tocando;
    }
    private void setVolume(int valorVolume){
        this.volume = valorVolume;
    }
    private void setLigado(boolean infoLigado){
        this.ligado = infoLigado;
    }
    private void setTocando(boolean infoTocando){
        this.tocando = infoTocando;
    }

    // Sobrescrevendo Métodos

    public void ligar(){
        this.setLigado(true);
    };
    public void desligar(){
        this.setLigado(false);
    };
    public void abrirMenu(){
        if (this.getLigado() == true){
            System.out.println("A TV está ligada.");
            if (this.getTocando() == true){
                System.out.println("A TV está tocando.");
            }
            else{System.out.println("A TV não está tocando.");}
            System.out.print("Volume: " + this.getVolume() + " ");
            for (int i = 0; i <= this.getVolume(); i += 10){
                System.out.print("|");
            }
            System.out.println("");
        }
        else{System.out.println("A TV está desligada.");}
    };
    public void fecharMenu(){
        System.out.println("Fechando menu.");
    };
    public void maisVolume(){
        if (this.getLigado() == true && this.getTocando() == true && this.getVolume() < 100){
            this.setVolume(this.getVolume() + 1);
            System.out.println("Aumentando o volume da TV...");
        }
        else{System.out.println("Não foi possível aumentar o volume.");}
    };
    public void menosVolume(){
        if (this.getLigado() == true && this.getTocando() == true && this.getVolume() > 0){
            this.setVolume(this.getVolume() - 1);
            System.out.println("Abaixando o volume da TV...");
        }
        else{System.out.println("Não foi possível baixar o volume.");}
    };
    public void ligarMudo(){
        if (this.getLigado() == true && this.getVolume() > 0){
            this.setVolume(0);
            System.out.println("A TV está no mudo.");
        }
        else{System.out.println("A TV já está no mudo.");}
    };
    public void desligarMudo(){
        if (this.getLigado() == true && this.getVolume() == 0){
            this.setVolume(50);
            System.out.println("Saindo do mudo...");
        }
        else{System.out.println("A TV não está no mudo.");}
    };
    public void play(){
        if (this.getLigado() == true && this.getTocando() == false){
            this.setTocando(true);
            System.out.println("A TV está tocando...");
        }
        else{System.out.println("Não foi possível reproduzir o conteúdo.");}
    };
    public void pause(){
        if (this.getLigado() == true && this.getTocando() == true){
            this.setTocando(false);
            System.out.println("A reprodução foi pausada.");
        }
        else{System.out.println("Não foi possível pausar a reprodução.");}
    };
}
