import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoItem extends Component {
    
    handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id)
    }

    handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
                <div>{this.props.todo.text}</div>
                <button onClick={this.handleComplete.bind(this)}>{this.props.todo.completed ? "Completed" : "Incomplete"}</button>
                <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
            </li>
        )
    }

}

export default TodoItem