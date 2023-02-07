const { html } = require('./texto-base');

// Greedy = O regExp está pegando todos os elementos
let regExp = /<.+>.+<\/.+>/g;

// Non-greedy = O regExp encontra até a primeira ocorrência
regExp = /<.+?>.+?<\/.+?>/g

console.log(html);

console.log(html.match(regExp));