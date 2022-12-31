package exercicio03;

public class exercicio03 {
    public static void main(String[] args) {
        int c = 1;
        do{
            if (c % 5 != 0) System.out.print(c);
            else break;
            c += 1;
        } while (c <= 10);
    }
}
