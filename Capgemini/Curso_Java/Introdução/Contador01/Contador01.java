package Contador01;

public class Contador01 {
    public static void main(String[] args) {
        int cc = 0;
        while (cc < 10){
            cc++;
            if (cc == 5 || cc == 7) {
                // Pula o laço e volta pro começo
                continue;
            }
            else if (cc == 8) {
                // Encerra o laço
                break;
            }
            System.out.println("Cambalhota nº " + cc);
        }
    }
}
