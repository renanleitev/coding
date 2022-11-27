package Aula04;

public class Caneta {
    private String modelo;
    private float ponta;
    private boolean tampada;
    private String cor;

    // Método construtor (tem o mesmo nome da Classe principal)
    public Caneta(String m, String c, float p){
        // Método simples
        // this.tampar();
        // this.cor = "Azul";

        // Método complexo
        this.modelo = m;
        this.cor = c;
        // this.ponta = p;
        this.setPonta(p);
        this.tampar();

    }

    // Criando um método getter (para exibir atributo)
    public String getModelo(){
        return this.modelo;
    }
    
    // Criando um método setter (para definir atributo)
    public void setModelo (String m){
        this.modelo = m;
    }

    public float getPonta(){
        return this.ponta;
    }

    public void setPonta(float p){
        this.ponta = p;
    }

    public void tampar(){
        this.tampada = true;
    }

    public void destampar(){
        this.tampada = false;
    }

    public void status(){
        // System.out.println("Modelo: " + this.modelo);
        System.out.println("Modelo: " + this.getModelo());
        // System.out.println("Ponta: " + this.ponta);
        System.out.println("Ponta: " + this.getPonta());
        System.out.println("Cor: " + this.cor);
        System.out.println("Tampada: " + this.tampada);
    }
    
}
