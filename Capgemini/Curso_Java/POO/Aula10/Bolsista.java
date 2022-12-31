package Aula10;

public class Bolsista extends Aluno {
    // Atributos
    private float bolsa;
    
    // Métodos
    public void renovarBolsa(){
        System.out.println("Renovando bolsa de " + getNome());
    }

    // Sobreposição de métodos
    @Override
    public void pagarMensalidade(){
        System.out.println("Mensalidade do bolsista " + getNome() + " paga com sucesso!");
    }

    // Métodos Especiais

    public float getBolsa() {
        return this.bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }

}
