const container = document.querySelector('.container');
const input = document.querySelector('.input');
const adicionar = document.querySelector('.adicionar');
// Obtendo texto da caixa de input


function criarTarefas(texto){
    // Adicionando o texto do input em um parágrafo
    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = `${texto} `;
    // Criando o botão de apagar
    let apagar = document.createElement('button');
    // Texto do botão de apagar
    apagar.innerHTML = 'Apagar';
    // Adicionando um pop-up no botão de apagar
    apagar.setAttribute('title', 'Apagar o item da lista');
    // Adicionando o texto e o botão de apagar
    container.appendChild(paragrafo);
    paragrafo.appendChild(apagar);
    // Criando a função de apagar
    apagar.addEventListener('click', function(){
        // Remove o elemento no HTML
        paragrafo.remove();
        // Remove o elemento no armazenamento local
        salvarTarefas();
    });
    // Apagando o texto do input
    input.value = '';
    // Voltando para o input
    input.focus();
};

function salvarTarefas(){
    // Selecionando todas as tarefas
    const tarefas = document.querySelectorAll('p');
    // Criando um array para armazenar o texto das tarefas
    const listaTarefas = [];
    // Criando um laço para obter o texto de cada tarefa e adicionando ao array
    for (let tarefa of tarefas){
        let tarefaTexto = tarefa.innerHTML;
        // Removendo o texto do botão apagar
        tarefaTexto = tarefaTexto.replace('<button title=\"Apagar o item da lista\">Apagar</button>', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    // Criando uma variável no formato JSON
    const tarefasJSON = JSON.stringify(listaTarefas);
    // Guardando a variável no armazenamento local do navegador
    localStorage.setItem('tarefas', tarefasJSON);
}

function lerTarefas(){
    // Obtendo as tarefas salvas anteriormente
    const tarefas = localStorage.getItem('tarefas');
    // Convertendo a variável tarefas para o formato JSON
    const listaTarefas = JSON.parse(tarefas);
    // Criando um laço para exibir o conteúdo no HTML
    for (let tarefa of listaTarefas){
        criarTarefas(tarefa);
    }
}
// Lendo a lista de tarefas salvas na última sessão
lerTarefas();

adicionar.addEventListener('click', function(){
    let texto = input.value;
    // Se o input estiver vazio, não faz nada
    if (texto != ''){
        criarTarefas(texto);
        salvarTarefas();
    }
});

input.addEventListener('keypress', function(e){
    let texto = input.value;
    // Se o input estiver vazio, não faz nada
    if (texto != ''){
        // Ao pressionar o botão Enter (keyCode === 13), ativa a função
        if (e.keyCode === 13){
            criarTarefas(texto);
            salvarTarefas();
        }
    }
});