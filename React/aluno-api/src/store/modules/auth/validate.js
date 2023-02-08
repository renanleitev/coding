import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';

export default function validate(obj){
    const id = obj.id;
    const nome = obj.nome;
    const sobrenome = obj.sobrenome;
    const email = obj.email;
    const idade = obj.idade;
    const peso = obj.peso;
    const altura = obj.altura;
    const password = obj.password;
    let formErrors = false;
    if ((nome !== undefined) && (nome.length < 3 || nome.length > 255)) {
        formErrors = true;
        toast.error('Nome inválido e/ou deve ter entre 3 e 255 caracteres');
    }
    if ((sobrenome !== undefined) && (sobrenome.length < 3 || sobrenome.length > 255)) {
        formErrors = true;
        toast.error('Sobrenome inválido e/ou deve ter entre 3 e 255 caracteres');
    }
    if ((email !== undefined) && (!isEmail(email))) {
        formErrors = true;
        toast.error('E-mail inválido');
    }
    if ((idade !== undefined) && (!isInt(String(idade)))){
        formErrors = true;
        toast.error('Idade inválida');
    }
    if ((peso !== undefined) && (!isFloat(String(peso)))){
        formErrors = true;
        toast.error('Peso inválido');
    }
    if ((altura !== undefined) && (!isFloat(String(altura)))){
        formErrors = true;
        toast.error('Altura inválida');
    }
    if ((id !== undefined) && (password !== undefined) && (password.length < 6 || password.length > 50)) {
        formErrors = true;
        toast.error('Senha inválida e/ou deve ter entre 6 e 50 caracteres');
    }
    if (formErrors) return formErrors;  
}
