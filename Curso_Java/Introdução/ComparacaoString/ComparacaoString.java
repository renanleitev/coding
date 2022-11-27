package ComparacaoString;

public class ComparacaoString {
    public static void main(String[] args) {
        String n1 = "Renan"; 
        String n2 = "Renan";
        String n3 = new String("Renan");
        String res;
        // n1 e n2 são variáveis (output: "igual")
        res = (n1==n2)?"igual":"diferente";
        System.out.println(res);
        // n1 é variável e n3 é um objeto (output: "diferente")
        res = (n1==n3)?"igual":"diferente";
        System.out.println(res);
        // Comparando conteúdo de variável com objeto
        res = (n1.equals(n3))?"igual":"diferente";
        System.out.println(res);
    }
}
