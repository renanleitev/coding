package Aula07;

import java.util.Random;

public class Luta {
    // Atributos
    private Lutador desafiado;
    private Lutador desafiante;
    private int rounds;
    private int vencedor;
    private boolean aprovada;
    // Métodos
    public void marcarLuta(Lutador l1, Lutador l2){
        if ((l1.getCategoria() == l2.getCategoria()) && (l1 != l2)){
            this.aprovada = true;
            this.desafiado = l1;
            this.desafiante = l2;
            System.out.println("A luta está marcada entre " + l2.getNome() +
            " e " + l1.getNome());
        }
        else{
            this.aprovada = false;
            this.desafiado = null;
            this.desafiante = null;
            if (l1 == l2){
                System.out.println("A luta não pode acontecer, pois é o mesmo lutador!");
            }
            else if (l1.getCategoria() != l2.getCategoria()){
                System.out.println("A luta não pode acontecer, pois os lutadores são de categorias diferentes!");
            }
        }
    }
    public void lutar(){
        if (this.aprovada){
            Random ale = new Random();
            vencedor = ale.nextInt(3);
            switch (vencedor) {
                case 0:
                    System.out.println("Deu empate!");
                    this.desafiado.empatarLuta();
                    this.desafiante.empatarLuta();
                    this.desafiado.apresentar();
                    this.desafiante.apresentar();
                    break;
                
                case 1:
                    System.out.println("O vencedor é: " + this.desafiado.getNome());
                    this.desafiado.ganharLuta();
                    this.desafiante.perderLuta(); 
                    this.desafiado.apresentar();
                    this.desafiante.apresentar();
                    break;
                
                case 2:
                    System.out.println("O vencedor é: " + this.desafiante.getNome());
                    this.desafiante.ganharLuta();
                    this.desafiado.perderLuta();
                    this.desafiado.apresentar();
                    this.desafiante.apresentar(); 
                    break;
            
                default:
                    break;
            }
        }
        else{
            System.out.println("A luta não pode acontecer!");
        }
    }
    // Métodos Especiais

    public Lutador getDesafiado() {
        return this.desafiado;
    }

    public void setDesafiado(Lutador desafiado) {
        this.desafiado = desafiado;
    }

    public Lutador getDesafiante() {
        return this.desafiante;
    }

    public void setDesafiante(Lutador desafiante) {
        this.desafiante = desafiante;
    }

    public int getRounds() {
        return this.rounds;
    }

    public void setRounds(int rounds) {
        this.rounds = rounds;
    }

    public int getVencedor() {
        return this.vencedor;
    }

    public void setVencedor(int vencedor) {
        this.vencedor = vencedor;
    }

    public boolean isAprovada() {
        return this.aprovada;
    }

    public boolean getAprovada() {
        return this.aprovada;
    }

    public void setAprovada(boolean aprovada) {
        this.aprovada = aprovada;
    }
    
}
