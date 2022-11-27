package comando_do_while;

public class comando_do_while {
    public static void main(String[] args) {
        int num = 0;

        // While simples (laço de repetição)
        while (num < 10) {
            num++;
            System.out.println("Posição do laço: " + num);
        }
        System.out.println("Fim do laço, na posição: " + num);

        // Do while (laço pós-testado)
        num = 0;
        // DO = Executa pelo menos uma vez
        do{
            System.out.println("Posição do laço: " + num);
            num++;
        } while (num < 10);
        System.out.println("Fim do laço, na posição: " + num);
    }
}
