import React, {useContext, useState} from 'react';
import './add-form.scss';
import { AlertContext } from "../../context/alert/alertContext";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { makeNote } from "../../factories/makeNote";

const AddForm = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const alert = useContext(AlertContext);
    const {addNote} = useContext(FirebaseContext);

    const submitHandler = (e) => {
        e.preventDefault();

        if (noteTitle.trim() === '') {
            alert.show('Please, enter note title!', 'danger');
            return;
        }

        const note = makeNote(noteTitle);
        addNote(note).then((res) => {
            alert.show('Note has been added!', 'success');
            setNoteTitle('');
        }).catch((e) => {
            alert.show('Note was not been added!', 'danger');
        });
    }

    return (
        <div>
            <form className="form-inline add-todo-form" onSubmit={ submitHandler }>
                <div className="form-group form-group-todo-title col-md-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter note title"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value.trim())} />
                </div>
                <div className="form-group form-group-btn col-md-2">
                    <button
                        type="submit"
                        className="btn btn-primary add-todo-btn"> Create note
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;