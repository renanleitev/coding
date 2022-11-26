package Aula07;

public class Aula07 {
    public static void main(String[] args) {
        Lutador lista[] =  new Lutador[4];
        String nome[] = {"Boy", "Luca", "Snap", "Dead"};
        String nacionalidade[] = {"França", "Brasil", "EUA", "Austrália"};
        int idade[] = {31, 29, 35, 28};
        float altura[] = {1.75f, 1.68f, 1.65f, 1.93f};
        float peso[] = {68.9f, 57.8f, 80.9f, 81.6f};
        int vitorias[] = {11, 14, 12, 13};
        int derrotas[] = {3, 2, 2, 0};
        int empates[] = {1, 3, 1, 2};

        for (int i = 0; i < nome.length; i++) {
            Lutador a = new Lutador(nome[i], nacionalidade[i],
                            idade[i], altura[i], peso[i], vitorias[i], 
                            derrotas[i], empates[i]);
            lista[i] = a;
            // a.apresentar();
            // a.status();
        }
        Luta b = new Luta();
        b.marcarLuta(lista[1], lista[3]);
        b.lutar();
    }
}
