// Criando uma arrow function para fazer uma requisição
const request = obj => {
    // Envolvendo o código em uma promise
    return new Promise((resolve, reject) => {
        // Criando uma variável para fazer a requisição
        const xhr = new XMLHttpRequest();
        // xhr.open('METODO = GET/POST', 'URL', ASYNC(TRUE)/SYNC(FALSE))
        // Para obter dados de uma URL
        xhr.open(obj.method, obj.url, true);
        // Para enviar dados para uma URL
        xhr.send();
        // Verificando se a requisição foi concluida com sucesso
        xhr.addEventListener('load', () => {
            // Se o código da requisição for entre 200 e 300 = sucesso
            if(xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText)
            // Se houver erro (código acima de 300), retorna a mensagem de erro
            else reject(xhr.statusText);  
        });
    })
} 
// Obtendo os cliques nos links da página principal
document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();
    if (tag === 'a'){
        // Impedindo que ao clicar o link seja acessado
        e.preventDefault();
        carregaPagina(elemento);
    }
});
async function carregaPagina(elemento){
    // Obtendo o link das páginas HTML
    const href = elemento.getAttribute('href');
    // Criando o objeto que vai servir de requisição
    const objRequest = {
        method: 'GET',
        url: href,
    }
    // Passando o objeto para a função request
    try{
        const response = await request(objRequest);
        carregaResultado(response);
    }
    catch(e){
        console.log(e);
    }
}
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}