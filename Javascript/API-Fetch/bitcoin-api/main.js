axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => {
    // Get the HTML element where the data should be displayed
    let container = document.querySelector('.data-container');
    const coins = ['USD', 'GBP', 'EUR'];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    createLineHeader(tr, 'Coin');
    createLineHeader(tr, 'Rate');
    createLineHeader(tr, 'Rate Float');
    coins.forEach(e => {
      const tr = document.createElement('tr');
      createElement(response, table, tr, e, 'code');
      createElement(response, table, tr, e, 'rate');
      createElement(response, table, tr, e, 'rate_float');
    })
});
function createElement(response, table, line, element, field){
    let code = response.data['bpi'][element][field];
    line.appendChild(createLineTable(code));
    table.appendChild(line);
}
function createLineHeader(tr, text){
    const campo = document.createElement('td');
    campo.innerHTML = text;
    campo.style.fontWeight = 'bolder';
    tr.appendChild(campo);
}
function createLineTable(element){
    let td = document.createElement('td');
    td.innerHTML = element;
    return td;
}