// Padrão do react
import React from "react";
// Importando o botão de editar e de deletar
import { FaEdit, FaWindowClose } from 'react-icons/fa';
// Importando prop-types = Para validar as funções importadas do Main.js
import PropTypes from "prop-types";
// Importando o estilo para o formulário
import './Task.css';

export default function Task({handleEdit, handleDelete, tasks}){
    return (
        <ul className="tasks">
        {tasks.map((task, index) => 
        <li key={task}>
            {task}
            <div>
                <FaEdit 
                className="edit"
                onClick={(e) => {handleEdit(e, index)}}
                />
                <FaWindowClose 
                className="delete"
                onClick={(e) => {handleDelete(e, index)}}
                />
            </div>
        </li>)}
    </ul>
    )
}
// Validando a função Task
Task.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
}