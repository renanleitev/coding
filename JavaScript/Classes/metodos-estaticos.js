class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0; 
    }
    // Métodos de instância = Acessível quando chama o objeto (instância)
    aumentarVolume(){
        console.log('Aumentando o volume. Volume atual:', this.volume);
        this.volume += 2;
    }
    diminuirVolume(){
        console.log('Diminuindo o volume. Volume atual:', this.volume);
        this.volume += 2;
    }
    // Método estático = Só é acessível quando chama a classe, e não o objeto
    static inserePilha(){
        console.log('As pilhas foram inseridas no controle remoto.');
    }
    // Não irá exibir o volume, pois a classe não possui valores
    static checaVolume(){
        console.log(this.volume);
    }
    // Não precisa declarar this.x ou this.y
    static somaNumeros(x, y){
        console.log(x + y);
    }
}
const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);
try{
    c1.inserePilha();
}
catch{
    console.log('Não foi possível chamar o objeto c1, chamando a classe ControleRemoto...');
    ControleRemoto.inserePilha();
}
ControleRemoto.checaVolume(); // undefined = A classe não possui valores, pois não é uma instância (objeto)
ControleRemoto.somaNumeros(2, 5);
// Exemplos de métodos estáticos clássicos
console.log(Math.random());
console.log(Number.parseInt('25'));