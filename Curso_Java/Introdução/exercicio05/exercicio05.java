package exercicio05;

public class exercicio05 {
    static int f1(int n){
        return n%2;
    }
    static int f2(int n){
        return n*2;
    }
    static int f3(int a, int b){
        return a+b;
    }
    public static void main(String[] args){
        // Função dentro de função
        System.out.println(f3(f1(3), f2(5)));
    }
}
