package receber_dados;

import javax.swing.JOptionPane;

public class receber_dados {
    public static void main(String[] args) {
        int idade;
        // Integer.parseInt(args[0]) = Para converter o input (string) em int
        // JOptionPane.showInputDialog = Exibe caixa de diálogo para receber input do usuário
        idade = Integer.parseInt(JOptionPane.showInputDialog("Informe a sua idade:"));
        // JOptionPane.showMessageDialog = Exibe caixa de mensagem para o usuário
        JOptionPane.showMessageDialog(null, "Você tem " + idade + " anos.");
        System.out.println("Você tem " + idade + " anos.");
    }
}
