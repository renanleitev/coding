function contar(){
    let ini = Number(document.getElementById('txti').value)
    let fim = Number(document.getElementById('txtf').value)
    let passo = Number(document.getElementById('txtp').value)
    let res = document.getElementById('res')
    let lista = []
    if (ini <= fim){
        for (i = ini; i <= fim; i += passo){
            lista.push(i)
        }
    }
    else{
        for (i = ini; i >= fim; i -= passo){
            lista.push(i)
        }
    }
    res.innerHTML = lista
}