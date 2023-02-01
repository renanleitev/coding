fetch('http://localhost:3001/alunos/')
  .then(response => response.json())
  .then(data => {
    let container = document.querySelector('.data-container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    createLineHeader(tr, 'Nome');
    createLineHeader(tr, 'Sobrenome');
    createLineHeader(tr, 'E-mail');
    createLineHeader(tr, 'Idade');
    createLineHeader(tr, 'Peso');
    createLineHeader(tr, 'Altura');
    data.map(e => {
      const tr = document.createElement('tr');
      tr.appendChild(createLineTable(e['nome']));
      tr.appendChild(createLineTable(e['sobrenome']));
      tr.appendChild(createLineTable(e['email']));
      tr.appendChild(createLineTable(e['idade']));
      tr.appendChild(createLineTable(e['peso']));
      tr.appendChild(createLineTable(e['altura']));
      table.appendChild(tr);
    })
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