import React from 'react';
import './todo-item.scss';

const TodoItem = ({todo}) => {
    return (<li className="list-group-item todo-item">{ todo.name }
        <button type="button" className="btn btn-danger remove-item">Remove</button>
    </li>);
}

export default TodoItem;