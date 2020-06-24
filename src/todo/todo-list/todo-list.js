import React from 'react';
import TodoItem from "../todo-item";

const TodoList = ({todos}) => {
    const list = todos.length > 0 ? todos.map((item) => {
        return <TodoItem key={item.id} todo={ item }/>
    }) : <p>Notes list is empty!</p>;

    return (
        <div>
            <ul className="list-group">
                { list }
            </ul>
        </div>
    );
};

export default TodoList;