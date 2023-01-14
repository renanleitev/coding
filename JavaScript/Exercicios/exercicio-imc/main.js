// Selecionando o elemento por meio do ID formulário
const form = document.querySelector('#formulario');
// Alterando funcionalidade do botão "Calcular"
form.addEventListener('submit', function(e){
    // Impedindo que o botão envie informações por padrão
    e.preventDefault();
    // Selecionando o input do peso
    const inputPeso = e.target.querySelector('#peso');
    // Selecionando o input da altura
    const inputAltura = e.target.querySelector('#altura');
    // Obtendo o valor do peso
    const peso = Number(inputPeso.value);
    // Obtendo o valor da altura
    const altura = Number(inputAltura.value);
    // Removendo NaN do resultado (NaN = false)
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }
    // Calculando o IMC
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    // Definindo a mensagem final para o usuário
    const msg = `Seu IMC é ${imc}: ${nivelImc}.`
    // Exibindo a mensagem final
    setResultado(msg, true);
})
// Calculando o valor do IMC
function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}
// Mostrando o nível do IMC
function getNivelImc(imc){
    if (imc >= 39.9) return 'Obesidade grau 3';
    if (imc >= 34.9) return 'Obesidade grau 2';
    if (imc >= 29.9) return 'Obesidade grau 1';
    if (imc >= 24.9) return 'Sobrepeso';
    if (imc >= 18.5) return 'Peso normal';
    if (imc < 18.5) return 'Abaixo do peso';
}

// Criando parágrafos
function criaParagrafo(className){
    // Criando um elemento de tag <p> = parágrafo
    const paragrafo = document.createElement('p');
    return paragrafo;
}

// Exibindo mensagem no resultado
function setResultado(msg, isValid){
    // Selecionando o elemento por meio do ID resultado
    const resultado = document.querySelector('#resultado');
    // Zerando o conteúdo HTML, após cada clique
    resultado.innerHTML = '';
    // Criando um novo parágrafo
    const paragrafo = criaParagrafo();
    // Exibindo se o resultado é válido ou não
    if (isValid){
        paragrafo.classList.add('paragrafo-resultado');
    }
    else{
        paragrafo.classList.add('bad');
    }
    // Inserindo conteúdo no parágrafo
    paragrafo.innerHTML = msg;
    // Adicionando o parágrafo na estrutura HTML
    resultado.appendChild(paragrafo);
}