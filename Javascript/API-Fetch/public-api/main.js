// Make an AJAX request to the API
axios.get('https://api.publicapis.org/entries')
  .then(response => {
    // Get the HTML element where the data should be displayed
    let container = document.querySelector('.data-container');
    let data = response.data;
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    criaLinhaCabecalho(tr, 'API');
    criaLinhaCabecalho(tr, 'Description');
    criaLinhaCabecalho(tr, 'Link');
    data.entries.map(e => {
      const tr = document.createElement('tr');
      tr.appendChild(criaLinhaTabela(e['API']));
      tr.appendChild(criaLinhaTabela(e['Description']));
      tr.appendChild(criaLinhaTabela(e['Link']));
      table.appendChild(tr);
    });
});
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