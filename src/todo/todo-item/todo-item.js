import React, { useContext } from 'react';
import './todo-item.scss';
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";

const TodoItem = ({todo}) => {
    const {removeNote, toggleDone} = useContext(FirebaseContext);
    const alert = useContext(AlertContext);

    const onRemove = () => {
        removeNote(todo.id)
            .then(res => alert.show('Note has been deleted!'))
            .catch(error => alert.show(error.toString(), 'danger'));
    }

    const onToggleDone = () => {
        toggleDone(todo.id)
            .then(res => alert.show('Note has been updated!'))
            .catch(error => alert.show(error.toString(), 'danger'));
    }

    const noteNameClasses = todo.done ? 'todo-item__name done' : 'todo-item__name';

    return (<li className="todo-item list-group-item">
        <span
            className={ noteNameClasses }
            onClick={onToggleDone}>{ todo.note }
        </span>
        <button
            type="button"
            className="btn btn-danger remove-item"
            onClick={ onRemove }>Remove
        </button>
    </li>);
}

export default TodoItem;