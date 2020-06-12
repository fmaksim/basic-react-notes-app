import React, { Component } from 'react';
import TodoList from "../todo-list";
import './app.scss';

class App extends Component {
    render() {
        const todos = [
            {
                id: 1,
                name: 'Todo 1'
            },
            {
                id: 2,
                name: 'Todo 2'
            },
            {
                id: 3,
                name: 'Todo 3'
            },
        ];
        return (
            <div className="wrapper">
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default App;
