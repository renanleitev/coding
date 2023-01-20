function carregar(){
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var corpo = document.getElementById('msg')
    var fundo = document.getElementById('fundo')
    msg.innerHTML = "Agora são " + hora + ":" + min + "."
    if (hora >= 0 && hora < 12){
        corpo.style.backgroundColor = 'yellow'
        fundo.style.backgroundColor = 'peru'
    }
    else if (hora >= 12 && hora < 18){
        corpo.style.backgroundColor = 'cyan'
        fundo.style.backgroundColor = 'green'
    }
    else{
        corpo.style.backgroundColor = 'gray'
        fundo.style.backgroundColor = 'black'
    }
}