axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  .then(response => {
    let container = document.querySelector('.data-container');
    let data = response.data.data;
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    createLineHeader(tr, 'Nation');
    createLineHeader(tr, 'Year');
    createLineHeader(tr, 'Population');
    data.map(e => {
      const tr = document.createElement('tr');
      tr.appendChild(createLineTable(e['Nation']));
      tr.appendChild(createLineTable(e['Year']));
      tr.appendChild(createLineTable(e['Population']));
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