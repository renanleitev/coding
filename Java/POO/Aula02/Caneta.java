package Aula02;

public class Caneta {
    // Atributos
    public String modelo;
    public String cor;
    private float ponta;
    protected int carga;
    private boolean tampada;

    // Métodos
    public void status(){
        // This = Chama o atributo da classe/objeto
        // Referência ao próprio objeto que chamou (no caso, c1)
        System.out.println("A caneta é " + this.modelo);
        System.out.println("Cor: " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada? " + this.tampada);
    }
    public void rabiscar(){
        if (this.tampada == true){
            System.out.println("Erro. Não posso rabiscar, pois a caneta está tampada.");
        }
        else{
            System.out.println("A caneta está destampada. Posso rabiscar!");
        }
    }
    // É possível mexer em atributo privado, desde que o método esteja
    // na mesma classe (tampar e destampar estão dentro de Caneta)
    public void tampar(){
        this.tampada = true;
    }
    public void destampar(){
        this.tampada = false; 
    }
}
