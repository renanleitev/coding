/*
! Factory function: 
- retorna um objeto, mas pode executar outros códigos;
- cada linha de código é separada por vírgula (obrigatoriamente);
- para nomear, utiliza-se lowerCamelCase;
! Constructor function: 
- retorna o molde de um objeto, precisa ser instanciado (new);
- cada linha de código é executada com ou sem ponto-e-vírgula;
- para nomear, utiliza-se letras maiusculas (é parecido com Classes);
*/

function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const funcaoSecreta = () => {
        console.log('Método interno.');
    }
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    // É possível adicionar métodos
    this.fala = () => {
        console.log(`${this.nome} está falando...`);
    }
    // O return é implícito
}
const p1 = new Pessoa('Fulano', 'Silva');
const p2 = new Pessoa('Beltrano', 'Pereira');
console.log(p1, p2);
p1.fala();
// ! Erro, pois a 'funcaoSecreta' é um método interno, privado
try{p1.funcaoSecreta();}
catch{console.log('Função secreta não pode ser acessada.')}
