import React from 'react';

export default function Input(props){
    const field = props.field;
    const setField = props.setField;
    const kind = props.kind;
    let type;
    let placeholder;
    switch(kind){
        case 'email':
            placeholder = 'Digite o seu e-mail';
            break;
        case 'password':
            type = 'password';
            placeholder = 'Digite a sua senha';
            break;
        default:
            type = 'text';
            placeholder = 'Digite o seu nome';
            break;
    }
    return (
        <input
        type={type}
        value={field}
        onChange={e => setField(e.target.value)}
        placeholder={placeholder}
        />
    );
}