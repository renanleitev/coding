package ExercicioRepita;

import javax.swing.JOptionPane;

public class ExercicioRepita {
    public static void main(String[] args) {
        int quantNum = 0, acima100 = 0, abaixo100 = 0, quantPar = 0, quantImpar = 0;
        float numero, media = 0, soma = 0; 
        do{ 
            numero = Float.parseFloat(JOptionPane.showInputDialog(null, 
            "<html>Informe um número: <br><em>(valor 0 interrompe)</em></html> "));
            soma += numero;
            if (numero == 0) {}
            else if (numero != 0) {
                quantNum++;
                media = soma/quantNum;
                if (numero > 100){
                    acima100++;
                    if (numero % 2 == 0) {quantPar++;}
                    else quantImpar++;
                }
                else if (numero < 100){
                    abaixo100++;
                    if (numero % 2 == 0) {quantPar++;}
                    else quantImpar++;
                }
            }
            else JOptionPane.showMessageDialog(null, "Por favor, digite um número válido.");
        } while (numero != 0);
        JOptionPane.showMessageDialog(null,
         "Resultado:" + "\n" + "Total de Valores Digitado: " + quantNum + "\n" + 
         "Total de Pares: " + quantPar + "\n" + "Total de Ímpares: " + quantImpar + "\n" +
         "Acima de 100: " + acima100 + "\n" + "Abaixo de 100: " + abaixo100 + "\n" +
         "Média dos valores: " + media);
    }
}
