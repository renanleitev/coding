class ValidaFormulario{
    constructor(){
        // Colocar os atributos antes de chamar a função
        this.formulario = document.querySelector('.formulario');
        // Invocando o método durante a inicialização
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    // Evitando que o botão de enviar seja ativado / Enviando o formulário
    handleSubmit(e){
        e.preventDefault();
        let valida = this.checaCamposValidos();
        if (valida === true) window.alert('Formulário enviado com sucesso.');
    }
    checaCamposValidos(){
        let valida = true;
        // Limpando os erros após cada clique, para evitar repetição 
        for (let erro of this.formulario.querySelectorAll('.error-text')) erro.remove();
        // Verificando cada input
        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            // Verificando se os inputs estão em branco
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`, 'red');
                valida = false;
            }
            // Verificando se os inputs possuem apenas letras e números
            if (this.apenasLetrasNumeros(campo.value) === false){
                this.criaErro(campo, `Campo "${label}" deve conter letras e/ou números.`, 'purple');
                valida = false;
            }
            // Verificando se o input "Usuário" possui entre 3 e 12 caracteres
            if (campo.classList.contains('usuario') && (campo.value.length < 3 || campo.value.length > 12)){
                this.criaErro(campo, `Campo "${label}" precisa ter entre 3 e 12 caracteres.`, 'blue');
                valida = false;
            }
            // Verificando se o CPF é válido
            if (campo.classList.contains('cpf') && campo.value){
                let resultado = this.validaCPF(campo);
                if (resultado === 'O CPF é inválido.'){
                    this.criaErro(campo, resultado, 'red');
                    valida = false;
                };
            }
            // Armazenando a senha em uma variável
            if (campo.classList.contains('senha')){
                let senha = campo.value;
            }
            // Verificando se o input "Senha" possui entre 6 e 12 caracteres
            if (campo.classList.contains('senha') && (campo.value.length < 6 || campo.value.length > 12)){
                this.criaErro(campo, `Campo "${label}" precisa ter entre 6 e 12 caracteres.`, 'blue');
                valida = false;
            }
            // Verificando se o input "Senha" e "Repetir Senha" são iguais
            if (campo.classList.contains('repetir-senha') && (campo.value !== senha.value)){
                this.criaErro(campo, `Campo "${label}" precisa ser igual a senha.`, 'red');
                valida = false;
            }
        }
        return valida;
    }
    criaErro(campo, msg, color){
        const div = document.createElement('div');
        // Estilizando a mensagem de erro
        div.innerHTML = msg;
        div.style.color = color;
        div.style.marginBottom = '10px';
        div.style.fontSize = '14px';
        div.classList.add('error-text');
        // Adicionando a mensagem de erro logo abaixo de cada input
        campo.insertAdjacentElement('afterend', div);
    }
    apenasLetrasNumeros(str){
        return Boolean(str.match(/^[A-Za-z0-9]*$/));
    }
    validaCPF(campo){
        const cpf = new ValidaCPF(String(campo.value));
        return cpf.checaCPF();
    }
}
const valida = new ValidaFormulario();