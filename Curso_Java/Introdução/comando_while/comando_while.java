package comando_while;

public class comando_while {
    public static void main(String[] args) {
        int num = 0;
        while (num < 10) {
            num++;
            System.out.println("Posição do laço: " + num);
        }
        System.out.println("Fim do laço");
    }
}
