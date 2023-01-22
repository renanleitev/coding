// Padrão, todo arquivo react deve ter
import React from "react";
// Importando o icone de + do módulo Fonte Awesome do React Icons
// No terminal = npm i react-icons
import { FaPlus } from 'react-icons/fa';
// Importando prop-types = Para validar as funções importadas do Main.js
import PropTypes from "prop-types";
// Importando o estilo para o formulário
import './Form.css';

export default function Form({handleSubmit, handleChange, newTask}){
    return (
        <form
        onSubmit={handleSubmit} 
        action="#" 
        className="form"
        >
            <input 
            onChange={handleChange} 
            type="text"
            value={newTask}
            />
            <button type="submit">
                <FaPlus/>
            </button>
        </form>
    )
}
// Validando a função Form
Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
}