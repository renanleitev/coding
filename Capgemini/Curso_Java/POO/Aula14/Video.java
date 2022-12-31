package Aula14;

public class Video implements AcoesVideo {
    // Atributos
    private String titulo;
    private int avaliacao;
    private int views;
    private int curtidas;
    private boolean reproduzindo;

    // Método Construtor
    public Video(String titulo){
        this.titulo = titulo;
        this.avaliacao = 1;
        this.views = 0;
        this.curtidas = 0;
        this.reproduzindo = false;
    }

    // Métodos de Interface
    @Override
    public void play(){
        setReproduzindo(true);
        System.out.println("O vídeo está sendo reproduzido");
    }
    @Override
    public void pause(){
        setReproduzindo(false);
        System.out.println("O vídeo foi pausado");
    }
    @Override
    public void like(){
        setCurtidas(getCurtidas() + 1);
        System.out.println("O vídeo foi curtido. Total de curtidas: " + getCurtidas());
    }
    @Override
    public String toString() {
        return "{" +
            " titulo='" + getTitulo() + "'" +
            ", avaliacao='" + getAvaliacao() + "'" +
            ", views='" + getViews() + "'" +
            ", curtidas='" + getCurtidas() + "'" +
            ", reproduzindo='" + getReproduzindo() + "'" +
            "}";
    }

    // Métodos Especiais
    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getAvaliacao() {
        return this.avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        int nova;
        nova = (int) ((this.avaliacao + avaliacao)/this.views);
        this.avaliacao = nova;
    }

    public int getViews() {
        return this.views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getCurtidas() {
        return this.curtidas;
    }

    public void setCurtidas(int curtidas) {
        this.curtidas = curtidas;
    }

    public boolean getReproduzindo() {
        return this.reproduzindo;
    }

    public void setReproduzindo(boolean reproduzindo) {
        this.reproduzindo = reproduzindo;
    }
}
