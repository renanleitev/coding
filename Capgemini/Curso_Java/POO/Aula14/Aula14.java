package Aula14;

public class Aula14 {
    public static void main(String[] args) {
        // Criando objetos
        Video v[] = new Video[3];
        v[0] = new Video("Aula1");
        v[1] = new Video("Aula2");
        v[2] = new Video("Aula3");
        // System.out.println(v[0].toString());

        Estudante e[] = new Estudante[2];
        e[0] = new Estudante("Renan", 22, "M", "nan");
        e[1] = new Estudante("Julia", 42, "F", "ju");
        // System.out.println(e[0].toString());
        // System.out.println(e[1].toString());

        // Agregação
        Visualizacao vis = new Visualizacao(e[0], v[0]);
        System.out.println(vis.toString());
    }
}
