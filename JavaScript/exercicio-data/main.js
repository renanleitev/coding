const container = document.querySelector('.container');
const data = new Date();
let diaSemana = data.getDay();
let diaAtual = data.getDate();
let diaSemanaTexto;
let mes = data.getMonth();
let mesCorreto;
let ano = data.getFullYear();
let hora = data.getHours();
let minuto = data.getMinutes();
let segundos = data.getSeconds();

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
}
switch(mes){
    case 0:
        mesCorreto = 'Janeiro';
        break;
    case 1:
        mesCorreto = 'Fevereiro';
        break;
    case 2:
        mesCorreto = 'Março';
        break;
    case 3:
        mesCorreto = 'Abril';
        break;
    case 4:
        mesCorreto = 'Maio';
        break;
    case 5:
        mesCorreto = 'Junho';
        break;
    case 6:
        mesCorreto = 'Julho';
        break;
    case 7:
        mesCorreto = 'Agosto';
        break;
    case 8:
        mesCorreto = 'Setembro';
        break;
    case 9:
        mesCorreto = 'Outubro';
        break;
    case 10:
        mesCorreto = 'Novembro';
        break;
    case 11:
        mesCorreto = 'Dezembro';
        break;
}
container.innerHTML = `${diaSemanaTexto}, ${diaAtual} de ${mesCorreto} de ${ano}. 
Hora atual: ${hora}:${minuto}:${segundos}. `;


