import React, { Component } from "react";
import './Main.css';
// Importando o icone de + do módulo Fonte Awesome do React Icons
import { FaPlus } from 'react-icons/fa';
// Componentes com estado = É possível modificar atributos
export default class Main extends Component {
    /*
        ! Usando constructor para mudar o estado do componente
        / props = Propriedades da classe
        constructor(props){
        / Herdando da classe Component
        super(props);
        / Definindo o estado do componente
        this.state = {
            newTask: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            newTask: e.target.value,
        })
    }
    */
    // ! Sem construtor (mais simples)
    state = {
        newTask: '',
        tasks: [
            'Fazer café',
            'Beber água',
            'Estudar',
        ]
    };
    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        })
    };
    render(){
        const { newTask, tasks } = this.state;
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>
                <form action="#" className="form">
                    <input 
                    onChange={this.handleChange} 
                    type="text"
                    value={newTask}
                    />
                    <button type="submit">
                        <FaPlus/>
                    </button>
                </form>
                <ul className="tasks">
                    {tasks.map(task => <li key={task}>{task}</li>)}
                </ul>
            </div>
        )
    }
}