package exercicio04;

public class exercicio04 {
    public static void main(String[] args) {
        // Referenciando valores de um vetor
        // int v[] = {2, 0, 3, 9};
        // v[v[2]] = v[v[1]];
        // for (int i: v) {
        //     System.out.println(i);
        // Exibir caracteres de string
        // ! String não é igual ao vetor de char!
        String s = "CURSOEMVIDEO";
        char[] r = new char[12];
        for (int c=s.length()-1; c >= 0; c--) {
            r[c] = s.charAt(c);
        }
        for (char l: r){
            System.out.print(l);
        }
    }
}
