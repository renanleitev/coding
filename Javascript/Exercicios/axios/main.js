// ! Obtendo os dados do JSON usando fetch
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementos(json));
// ! Obtendo os dados do JSON usando axios
/config/workspace/coding/Javascript/Exercicios/exercicio-fetch/axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data));
// Função para gerar uma tabela e exibir os elementos
function carregaElementos(json){
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    table.appendChild(thead);
    thead.appendChild(tr);
    criaLinhaCabecalho(tr, 'Nome');
    criaLinhaCabecalho(tr, 'Idade');
    criaLinhaCabecalho(tr, 'Salário (R$)');
    for (let pessoa of json){
        const tr = document.createElement('tr');
        tr.appendChild(criaLinhaTabela(pessoa.nome));
        tr.appendChild(criaLinhaTabela(pessoa.idade));
        tr.appendChild(criaLinhaTabela(pessoa.salario));
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
function criaLinhaCabecalho(tr, texto){
    const campo = document.createElement('td');
    campo.innerHTML = texto;
    campo.style.fontWeight = 'bolder';
    tr.appendChild(campo);
}
function criaLinhaTabela(elemento){
    let td = document.createElement('td');
    td.innerHTML = elemento;
    return td;
}