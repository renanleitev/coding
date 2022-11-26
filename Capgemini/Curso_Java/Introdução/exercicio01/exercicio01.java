package exercicio01;

public class exercicio01 {
    public static void main(String[] args) {
        int x = 8, y = 3;
        int w = x/y;
        String z = (w % 2 == 0) ? "frase1":"frase2";
        System.out.println(z);
        String parte1 = "Curso";
        String parte2 = "Video";
        String parte3 = parte1 + parte2;
        String parte4 = "CursoVideo";
        // Conteúdo é o mesmo, mas os objetos são diferentes
        System.out.println(parte3 == parte4);
        System.out.println(parte3.equals(parte4));
    }
}
