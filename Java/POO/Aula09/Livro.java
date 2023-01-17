package Aula09;

public class Livro implements Publicacao {
    // Atributos
    private String titulo;
    private String autor;
    private int totPaginas;
    private int pagAtual;
    private boolean aberto;
    private String leitor;

    // Método Construtor
    public Livro(String titulo, String autor, int totPaginas, int pagAtual, boolean aberto, String leitor) {
        this.titulo = titulo;
        this.autor = autor;
        if (totPaginas > 0){this.totPaginas = totPaginas;}
        else{
            System.out.println("Não existe livro com essa quantidade de páginas: " + totPaginas);
            System.out.println("Atribuindo número mínimo de páginas...");
            this.totPaginas = 1;
        }
        if ((pagAtual <= totPaginas)&&(pagAtual > 0)){
            this.pagAtual = pagAtual;
        }
        else if (pagAtual > totPaginas){
            System.out.println("Não é possível definir a página atual, pois ela é maior que o total de páginas!");
            System.out.println("Redefinindo a página atual para a posição inicial...");
            this.pagAtual = 0;
        }
        else{
            System.out.println("Não existe página com essa numeração...");
            System.out.println("Redefinindo a página atual para a posição inicial...");
            this.pagAtual = 0;
        }
        this.aberto = false;
        this.leitor = leitor;
    }

    // Métodos Especiais

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return this.autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getTotPaginas() {
        return this.totPaginas;
    }

    public void setTotPaginas(int totPaginas) {
        this.totPaginas = totPaginas;
    }

    public int getPagAtual() {
        return this.pagAtual;
    }

    public void setPagAtual(int pagAtual) {
        if ((pagAtual <= getTotPaginas()) && (pagAtual >=0)) {
            this.pagAtual = pagAtual;
            System.out.println("Abrindo o livro na página " + getPagAtual());
        }
        else{
            System.out.println("Desculpe, não é possível abrir o livro nessa página.");
        }
    }

    public boolean isAberto() {
        return this.aberto;
    }

    public boolean getAberto() {
        return this.aberto;
    }

    public void setAberto(boolean aberto) {
        this.aberto = aberto;
    }

    public String getLeitor() {
        return this.leitor;
    }

    public void setLeitor(String leitor) {
        this.leitor = leitor;
    }

    // Exibir
    public void Exibir(){
        System.out.println("Título: " + getTitulo());
        System.out.println("Autor: " + getAutor());
        System.out.println("Total de Páginas: " + getTotPaginas());
        System.out.println("Página Atual: " + getPagAtual());
        System.out.print("Está aberto? ");
        if (getAberto()){
            System.out.println("Sim");
        }
        else{
            System.out.println("Não");
        }
        System.out.println("Nome do leitor: " + getLeitor());
    }

    // Utilizando a interface
    public void abrir(){
        System.out.println("O livro está aberto...");
        setAberto(true);
    }
    public void fechar(){
        if (this.getAberto()){
            System.out.println("O livro está sendo fechado...");
            setAberto(false);}
        else{
            System.out.println("Não é possível fechar, pois o livro já está fechado!");
        }
    }
    public void folhear(){
        if (this.getAberto()){
            System.out.println(getLeitor() + " está folheando o livro na página " + 
            getPagAtual());
            setAberto(true);
        }
        else{
            System.out.println("O livro não pode ser lido, pois está fechado!");
        }
    }
    public void avancarPag(){
        if (this.getAberto()){
            if ((getPagAtual() >= 0) && (getPagAtual() < getTotPaginas())){
                System.out.println(getLeitor() + " leu mais uma página...");
                setPagAtual(getPagAtual() + 1);
                System.out.println("Página atual: " + getPagAtual());}
            else if (getPagAtual() == getTotPaginas()){
                System.out.println("Parabéns " + getLeitor() + "! Você terminou de ler o livro!");
            }
            else{
                System.out.println("Não é possível avançar mais...");
            }
        }
        else{System.out.println("Não é possível avançar as páginas, pois o livro está fechado!");}
    }
    public void voltarPag(){
        if (this.getAberto()){
            if ((getPagAtual() > 0) && (getPagAtual() <= getTotPaginas())){
                System.out.println(getLeitor() + " voltou uma página...");
                setPagAtual(getPagAtual() - 1);
                System.out.println("Página atual: " + getPagAtual());
            }
            else if (getPagAtual() == 0){
                System.out.println("Não é possível voltar mais páginas...");
            }
        }
        else{System.out.println("Não é possível voltar as páginas, pois o livro está fechado!");}
    }
}
