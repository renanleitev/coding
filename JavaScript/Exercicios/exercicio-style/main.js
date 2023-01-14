// Retorna apenas o primeiro elemento com a classe
// const paragrafos = document.querySelector('.paragrafos');
// console.log(paragrafos.innerHTML);
// Selecionando todos os elementos com a mesma tag
const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos); // NodeList(4) [p.paragrafos, p.paragrafos, p.paragrafos, p.paragrafos]
// Obtendo a cor de fundo da página
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
for (let paragrafo of paragrafos){
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = 'green';
}