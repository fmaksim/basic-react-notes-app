import React from 'react';
import TodoItem from "./todo-item";

const TodoList = ({ todos }) => {
    const list = todos.map((item) => {
        return <TodoItem todo={item}/>
    });

    return (
        <div>{list}</div>
    );
};



export default TodoList;