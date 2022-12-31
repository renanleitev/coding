package comando_for;

public class comando_for {
    public static void main(String[] args) {
        // For = Posso declarar a variável e o contador dentro do for
        for (int i = 0; i < 10; i++) {
            System.out.println("Vezes repetidas: " + i);
            if (i == 7){
                System.out.println("Parei na posição: " + i);
                // Break = Quebra o laço
                break;
            }
        }
    }
}
