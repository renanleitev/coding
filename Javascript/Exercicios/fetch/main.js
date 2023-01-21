// fetch = Promise padrão do Javascript para requisições
document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();
    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(elemento);
    }
});
async function carregaPagina(elemento){
    try{
        const resultado = document.querySelector('.resultado');
        const href = elemento.getAttribute('href');
        const resposta = await fetch(href);
        if(resposta.status !== 200) throw new Error('Não foi possível encontrar a página.');
        const html = await resposta.text();
        resultado.innerHTML = html;
    }
    catch(e){
        console.log(e);
    }
};
