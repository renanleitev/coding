package TesteFuncao;

public class TesteFuncao {

    // void = Retorna nada
    static void soma(int a, int b){
        // ! Não pode usar return em void!
        int s = a + b;
        System.out.println("A soma é " + s);
    }

    // int = Retorna um integer
    static int adicao(int a, int b){
        int add = a + b;
        System.out.print("A soma é ");
        // ! Retorna apenas integer
        return add;
    }

    // ! O método main é sempre executado primeiro!
    public static void main(String[] args) {
        soma(5, 3);
        System.out.println(adicao(7, 9));
    }
}
