// Verificar se uma imagem está ou não no modo paisagem
const paisagem = (largura, altura) => largura > altura;
console.log(paisagem(1920, 1080)); 
console.log(paisagem(720, 1080)); 