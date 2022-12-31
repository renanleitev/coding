package HoraDoSistema;

import java.util.Date;
import java.util.Locale;
import java.awt.Toolkit;
import java.awt.Dimension;

public class HoraDoSistema {
    public static void main(String[] args) {
        Date relogio = new Date();
        Locale loc = Locale.getDefault();
        System.getProperties();
        // Idioma do sistema (apenas as siglas) - sem importação
        System.out.println("O idioma do sistema é: " + System.getProperty("user.language"));
        // Idioma do sistema (completo) - com importação
        System.out.println("O idioma do sistema é: " + loc.getDisplayLanguage());
        // Hora do sistema
        System.out.println("A hora do sistema é: " + relogio.toString());
        // Resolução do sistema
        Toolkit tk = Toolkit.getDefaultToolkit();
        Dimension dim = tk.getScreenSize();
        System.out.println("A resolução do sistema: " + dim.width + " X " + dim.height);
    }
}
