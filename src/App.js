import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput"
import TodosList from "./components/TodosList"
import uuid from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = { allTodos: [] }
  }

  createTodoObj = (inputVal) => {
    this.StoreTodo({ id: uuid.v4(), title: inputVal, done: false });
  }

  StoreTodo = (newTodo) => {
    this.setState({ allTodos: [...this.state.allTodos, newTodo] })
  }

  handleCheckTodo = (checkVal, id) => {
    let todos = this.state.allTodos.slice();
    let index = todos.findIndex(x => x.id === id);
    todos[index].done = checkVal;
    this.setState({ allTodos: todos });
  }

  handleDeleteTodo = (id) => {
    let todos = this.state.allTodos.slice();
    let index = todos.findIndex(x => x.id === id);
    this.setState({allTodos: todos.slice(0,index).concat(todos.slice(index+1))});
  }

  render() {
    return (
      <div className="App">
        <TodoInput todoInputValue={this.createTodoObj} />
        <TodosList todoList={this.state.allTodos} onChecked={this.handleCheckTodo}
          onDelete={this.handleDeleteTodo} />
      </div>
    );
  }
}
export default App;
