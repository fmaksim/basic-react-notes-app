import React, { useContext } from 'react';
import './todo-item.scss';
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";

const TodoItem = ({todo}) => {
    const {removeNote} = useContext(FirebaseContext);
    const alert = useContext(AlertContext);

    const onRemove = () => {
        removeNote(todo.id)
            .then(res => alert.show('Note has been deleted!'))
            .catch(error => alert.show(error.toString(), 'danger'));
    }

    return (<li className="todo-item list-group-item">{ todo.note }
        <button
            type="button"
            className="btn btn-danger remove-item"
            onClick={ onRemove }>Remove
        </button>
    </li>);
}

export default TodoItem;