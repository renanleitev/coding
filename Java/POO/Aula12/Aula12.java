package Aula12;

public class Aula12 {
    public static void main(String[] args) {
        // ! Não pode instanciar classes abstratas!
        // Animal n1 = new Animal();

        // ! Polimorfismo de sobrecarga
        Pug p1 = new Pug();
        p1.reagir("olá");
        p1.reagir("vai apanhar");
        p1.reagir(11);
        p1.reagir(22);
        p1.reagir(true);
        p1.reagir(false);
        p1.reagir(2, 12.5f);
        p1.reagir(17, 4.5f);

        // ! Polimorfismo de Sobreposição
        // Mamifero m1 = new Mamifero();
        // m1.setPeso(5.7f);
        // m1.setIdade(8);
        // m1.setMembros(4);
        // m1.locomover();
        // m1.alimentar();
        // m1.emitirSom();

        // Canguru c1 = new Canguru();
        // c1.setPeso(55.3f);
        // c1.setIdade(3);
        // c1.setMembros(4);
        // c1.locomover();
        // c1.alimentar();
        // c1.emitirSom();
        // c1.usarBolsa();

        // Cachorro k1 = new Cachorro();
        // k1.setPeso(3.94f);
        // k1.setIdade(7);
        // k1.setMembros(4);
        // k1.locomover();
        // k1.alimentar();
        // k1.emitirSom();
        // k1.abanarRabo();

        // Mamifero m1 = new Mamifero();
        // m1.setPeso(85.3f);
        // m1.setIdade(2);
        // m1.setMembros(4);
        // m1.locomover();
        // m1.alimentar();
        // m1.emitirSom();

        // Reptil r1 = new Reptil();

        // Peixe p1 = new Peixe();
        // p1.setPeso(0.35f);
        // p1.setIdade(1);
        // p1.setMembros(0);
        // p1.locomover();
        // p1.alimentar();
        // p1.emitirSom();
        // p1.soltarBolha();

        // Ave a1 = new Ave();
        // a1.setPeso(0.89f);
        // a1.setIdade(3);
        // a1.setMembros(2);
        // a1.locomover();
        // a1.alimentar();
        // a1.emitirSom();
        // a1.fazerNinho();
    }
}
