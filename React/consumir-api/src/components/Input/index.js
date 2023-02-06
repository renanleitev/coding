import React from 'react';

export default function Input(props){
    const field = props.field;
    const setField = props.setField;
    const placeholder = props.placeholder.charAt(0).toUpperCase(0) + props.placeholder.slice(1);
    let type;
    switch(placeholder){
        case 'Password':
            type = 'password';
            break;
        case 'Email':
            type = 'email';
            break;
        case 'Idade':
            type = 'number';
            break;
        default:
            type = 'text';
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