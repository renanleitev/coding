import React, { Component } from "react";
import './Main.css';
// Importando o formulário
import Form from './Form';
// Importando a lista de tarefas
import Task from './Task';
// Componentes com estado = É possível modificar atributos
export default class Main extends Component {
    // Definindo os estados da aplicação principal (Main)
    state = {
        newTask: '',
        tasks: [],
        index: -1,
    };
    // Recuperando a lista de tarefas do armazenamento local
    componentDidMount(){
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (!tasks) return;
        this.setState({ tasks });
    }
    // componentDidUpdate = Captura toda alteração que ocorrer na página
    // Salvando a lista de tarefas no armazenamento local
    componentDidUpdate(prevProps, prevState){
        const { tasks } = this.state;
        if (tasks === prevState.tasks) return;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { tasks, index } = this.state;
        let { newTask } = this.state;
        // Eliminando os espaços em branco do input
        newTask = newTask.trim();
        // Verificando se a tarefa já não está na lista de tarefas
        if (tasks.includes(newTask)) return;
        const newTasks = [...tasks];
        // Verificando se está adicionando ou editando a tarefa
        // Adicionando
        if (index === -1){
            this.setState({
                tasks: [...newTasks, newTask],
                newTask: '',
            })
        }
        // Editando
        else {
            newTasks[index] = newTask;
            this.setState({
                tasks: [...newTasks],
                index: -1,
            })
        }
    };
    handleEdit = (e, index) => {
        const { tasks } = this.state;
        this.setState({
            index,
            newTask: tasks[index],
        })
    };
    handleDelete = (e, index) => {
        const { tasks } = this.state;
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        this.setState({
            tasks: [...newTasks],
        })
    };
    render(){
        const { newTask, tasks } = this.state;
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    newTask={newTask}
                />
                <Task
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    tasks={tasks}
                />
            </div>
        )
    }
};