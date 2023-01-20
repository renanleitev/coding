// Novo e nomes estão interligados por referência
const nomesComReferencia = ['Alberto', 'Beltrano', 'Caio'];
const novoComReferencia = nomesComReferencia;
novoComReferencia.pop();
console.log('Com referência:', nomesComReferencia);
// Desfazendo a referência
const nomesSemReferencia = ['Alberto', 'Beltrano', 'Caio'];
// Desempacotando o array em elementos separados
const novoSemReferencia = [...nomesSemReferencia];
novoSemReferencia.pop();
console.log('Sem referência:', nomesSemReferencia);