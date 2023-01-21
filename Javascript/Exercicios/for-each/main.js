const elements = [
    {tag: 'p', texto: 'Tag p adicionada com sucesso'},
    {tag: 'div', texto: 'Tag div adicionada com sucesso'},
    {tag: 'section', texto: 'Tag section adicionada com sucesso'},
    {tag: 'footer', texto: 'Tag footer adicionada com sucesso'},
]
function createElement(className, classText){
    const container = document.querySelector('.container');
    const element = document.createElement(className);
    element.innerHTML = classText;
    container.appendChild(element);
}
elements.forEach(function(element) {
    const {tag, texto} = element; 
    createElement(tag, texto);
});