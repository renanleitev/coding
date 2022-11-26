package OperadoresLogicos;

public class OperadoresLogicos {
    public static void main(String[] args) {
        int x = 4, y = 7, z = 12;
        boolean resultado;
        // && (e) = As duas condições precisam ser verdadeiras
        resultado = (x<y && y<z)?true:false;
        System.out.println(resultado);
        // || (ou) = Apenas uma das condições precisa ser verdadeira
        resultado = (x<y || y==z)?true:false;
        System.out.println(resultado);
        // ^ (ou exclusivo) = Não pode ter duas condições verdadeiras
        resultado = (x<y ^ y<z)?true:false;
        System.out.println(resultado);
    }
}
