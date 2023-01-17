function criarCalculadora(){
    return {
        // Atributos
        display: document.querySelector('.display'),
        container: document.querySelector('.container'),
        // Iniciando a função
        inicia(){
            this.cliqueBtn();
            this.pressionaEnter();
        },
        // Métodos
        cliqueBtn(){
            // Utilizando arrow function para obter o this da calculadora, e não do document
            document.addEventListener('click', e => {
                const elemento = e.target;
                if (elemento.classList.contains('btn-num')){
                    this.btnDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')){
                    this.btnClear();
                }
                if (elemento.classList.contains('btn-del')){
                    this.btnRemove();
                }
                if (elemento.classList.contains('btn-eq')){
                    this.btnCalcular();
                }
            })
        },
        btnDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        },
        btnClear(){
            this.display.value = '';
        },
        btnRemove(){
            this.display.value = this.display.value.slice(0, -1);
        },
        btnCalcular(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if (!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }
            catch{
                alert('Conta inválida');
                return;
            }
        },
        pressionaEnter(){
            this.container.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.btnCalcular();
                }
            });
        }
    };
}
const calculadora = criarCalculadora();
calculadora.inicia();