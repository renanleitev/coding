class ValidaFormulario{
    constructor(){
        // Colocar os atributos antes de chamar a função
        this.formulario = document.querySelector('.formulario');
        this.nome = document.getElementById("nome");
        this.email = document.getElementById("email");
        this.cargo = document.getElementById("cargo");
        // Invocando o método durante a inicialização
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        let valida = this.validar();
        if (valida === true) window.alert('Formulário enviado com sucesso.');
    }
    validar(){
        let valida = true;
        // Limpando os erros após cada clique, para evitar repetição 
        for (let erro of this.formulario.querySelectorAll('.erro')) erro.remove();  
        // Verificando os campos  
        if(!this.nome.value) valida = this.validaHTML("O campo nome não pode estar vazio.");   
        if(this.nome.value.length < 3) valida = this.validaHTML("O campo nome deve ter pelo menos três letras.");
        if(!this.email.value) valida = this.validaHTML("O campo e-mail não pode estar vazio.");
        if(this.email.value.indexOf("@") === -1) valida = this.validaHTML("O campo e-mail deve ter @.");
        if(this.email.value.indexOf(".") === -1) valida = this.validaHTML("O campo e-mail deve ter ponto.");     
        if(this.cargo.value == "Cargo") valida = this.validaHTML("Informe um cargo.");       
        return valida;
    }
    validaHTML(texto){
        const erro = document.createElement('p');
        erro.innerHTML = texto;
        erro.style.color = 'red';
        erro.classList.add('erro');
        this.formulario.appendChild(erro);
        return false;
    }
}
const formulario = new ValidaFormulario();