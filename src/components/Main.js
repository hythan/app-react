import React, { Component } from 'react';
import './Main.css';
import Form from './Form'
import Tasks from './Tasks'

export default class Main extends Component {

  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  componentDidMount() {
    this.setState(
      { tasks: JSON.parse(localStorage.getItem('tasks')) }
    );

  }

  componentDidUpdate(preProps, prevState) {
    const { tasks } = this.state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    const newTasks = tasks;

    if (tasks.indexOf(newTask) !== -1) return;
    if (index !== -1) {
      newTasks.splice(index, 1, newTask);
      this.setState({
        tasks: newTasks,
        newTask: ''
      })
      return;
    }

    newTasks.push(newTask);

    this.setState({
      tasks: newTasks,
      newTask: ''
    })
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index]
    })
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    let newTasks = tasks;
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    const { newTask, tasks } = this.state
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          newTask={newTask}
          handleChange={this.handleChange}
        />
        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>

    )
  }
}
