axios.get('https://api.publicapis.org/entries')
  .then(response => {
    let container = document.querySelector('.data-container');
    let data = response.data;
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    createLineHeader(tr, 'API');
    createLineHeader(tr, 'Description');
    createLineHeader(tr, 'Link');
    data.entries.map(e => {
      const tr = document.createElement('tr');
      tr.appendChild(createLineTable(e['API']));
      tr.appendChild(createLineTable(e['Description']));
      tr.appendChild(createLineTable(e['Link']));
      table.appendChild(tr);
    });
});
function createLineHeader(tr, text){
    const field = document.createElement('td');
    field.innerHTML = text;
    field.style.fontWeight = 'bolder';
    tr.appendChild(field);
}
function createLineTable(element){
    let td = document.createElement('td');
    td.innerHTML = element;
    return td;
}