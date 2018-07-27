import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
    handleDelete = (id) => {
        this.props.onDelete(id);
    }
    handleCheck = (checkVal, id) => {
        this.props.onChecked(checkVal, id);
    }
    render() {
        return (
            <div className="todos-list">
                {this.props.todoList.map(todo => {
                    return (
                        <Todo key={todo.id} todo={todo} onDelete={this.handleDelete} onChecked={this.handleCheck} />
                    )
                })}
            </div>
        )
    }
}