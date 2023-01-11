function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')
    var sexo = document.getElementById('sexo')
    var idade = ano - Number(fano.value)
    if (fano.value <= 0 || fano.value > ano){
        res.innerHTML = "Erro. Tente novamente."
    }
    else if (idade >= 130){
        res.innerHTML = "Impossível viver tanto assim!"
    }
    else{
        res.innerHTML = "Idade: " + idade + " ano(s)."
    }
    if (fsex[0].checked){
        sexo.innerHTML = "Sexo: Masculino."
    }
    else{
        sexo.innerHTML = "Sexo: Feminino."
    }
}