function tabuada(){
    let num = Number(document.getElementById("txtn").value)
    let tab = document.getElementById("seltab")
    let c = 1
    // Zerando a tabuada no próximo loop
    tab.innerHTML = ''
    while(c <= 10){
        let item = document.createElement("option")
        item.text = num + " X " + c + " = " + num*c
        tab.appendChild(item)
        c++
    }
}