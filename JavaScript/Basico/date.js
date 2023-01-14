// Data atual
const data = new Date();
console.log(data.toString());
// Data zero = 01/01/1970
const dataZero = new Date(0);
console.log(dataZero.toString());
// !! Adicionando horas e dias (para igualar ao fuso horário normal)
// 60 segundos * 60 minutos * 3 horas * 1000 milésimos de segundos
const tresHoras = 60 * 60 * 3 * 1000
// 60 segundos * 60 minutos * 24 horas * 1000 milésimos de segundos
const umDia = 60 * 60 * 24 * 1000;
// !! Exibindo data zero com fuso horário correto
const dataTresHoras = new Date(0 + tresHoras);
console.log(dataTresHoras.toString());
// !! Exibindo dia seguinte ao dia zero
const dataUmDia = new Date(0 + tresHoras + umDia);
console.log(dataUmDia.toString());
// !! Especificando uma data exata
// new Date(ano, mês, dia, hora, minuto, segundo, milésimo)
// !! Obs: Janeiro = 0, Fevereiro = 1, ..., Dezembro = 11
const dataExata = new Date(2019, 3, 20, 15, 14, 27, 5000);
console.log(dataExata.toString());
// !! Utilizando data no formato string
// !! Obs: Em string, o mês fica normal (Janeiro = 1)
const dataString = new Date('2019-04-20 20:20:59');
console.log(dataString.toString());
// Obtendo apenas o dia atual
console.log("Dia", data.getDate());
// Obtendo apenas o mês atual (Janeiro = 0)
console.log("Mês", data.getMonth());
// Obtendo apenas o ano atual
console.log("Ano", data.getFullYear());
// Obtendo apenas a hora atual
console.log("Hora", data.getHours());
// Obtendo apenas o minuto atual
console.log("Minuto", data.getMinutes());
// Obtendo apenas o segundo atual
console.log("Segundos", data.getSeconds());
// Obtendo apenas os milisegundos atuais
console.log("Milisegundos", data.getMilliseconds());
// Obtendo apenas o dia da semana (Domingo = 0, Sábado = 6)
console.log("Dia da semana", data.getDay());