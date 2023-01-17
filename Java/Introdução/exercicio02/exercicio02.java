package exercicio02;

public class exercicio02 {
    public static void main(String[] args) {
        boolean val1 = (4>=5), val2 = (4<4), val3 = (val1==val2);
        boolean val4 = val1 ^ val3;
        boolean val5 = !val2 && val4;
        System.out.println(val4 + " " + val5);
        System.out.println(val1 + " " + val2 + " " + val3);
    }
}
