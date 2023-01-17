function Calculadora(){
    this.display = document.querySelector('.display');
    this.container = document.querySelector('.container');
    this.inicia = () => {
        this.cliqueBtn();
        this.pressionaEnter();
    };
    this.cliqueBtn = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;
            if (elemento.classList.contains('btn-num')) this.btnDisplay(elemento.innerText);
            if (elemento.classList.contains('btn-clear')) this.btnClear();
            if (elemento.classList.contains('btn-del')) this.btnRemove();
            if (elemento.classList.contains('btn-eq')) this.btnCalcular();
        })
    }
    this.btnDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    };
    this.btnClear = () => this.display.value = '';
    this.btnRemove = () => this.display.value = this.display.value.slice(0, -1);
    this.btnCalcular = () => {
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
    }
    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.btnCalcular();
        }) 
    }
}
const calculadora = new Calculadora();
calculadora.inicia();