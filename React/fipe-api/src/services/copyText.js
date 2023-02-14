import {toast} from 'react-toastify';

export default function copyText(){
    let text = '';
    let targets = document.getElementsByClassName('result');
    for ( let i = 0; i < targets.length; i++ ) {
        text += targets[i].innerText + '\n';
    }
    navigator.clipboard.writeText(text);
    toast.success('Texto copiado com sucesso!');
}