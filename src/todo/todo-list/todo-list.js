import React from 'react';
import TodoItem from "../todo-item";

const TodoList = ({todos}) => {
    const list = todos ? todos.map((item) => {
        return <TodoItem todo={ item }/>
    }) : null;

    return (
        <div>
            <ul class="list-group">
                { list }
            </ul>
        </div>
    );
};

export default TodoList;