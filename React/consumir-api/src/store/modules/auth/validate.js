import { isEmail } from 'validator';
import { toast } from 'react-toastify';

export default function Validate(
    nome = null,
    email = null,
    password = null,
){
    let formErrors = false;
    if ((nome !== null) && (nome.length < 3 || nome.length > 255)) {
        formErrors = true;
        toast.error('Nome inválido e/ou deve ter entre 3 e 255 caracteres');
    }
    if ((email !== null) && (!isEmail(email))) {
        formErrors = true;
        toast.error('E-mail inválido');
    }
    if ((password !== null) && (password.length < 6 || password.length > 50)) {
        formErrors = true;
        toast.error('Senha inválida e/ou deve ter entre 6 e 50 caracteres');
    }
    if (formErrors) return;  
}
