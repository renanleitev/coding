const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// ! Utilizando o método concat
const a3 = a1.concat(a2, [7, 8, 9], 'teste');
console.log(a3);
// ! Utilizando o operador resto (...)
const a4 = [...a1, 'teste', ...a2, ...[7, 8, 9]];
console.log(a4);
// ! Obs: O sinal '+' não funciona para concatenar arrays
const falha = a1 + a2;
console.log(typeof(falha), falha);