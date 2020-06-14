import React from 'react';
import './add-form.scss';

const AddForm = () => {
    return (
        <div>
            <form className="form-inline add-todo-form" onSubmit={ () => {} }>
                <div className="form-group form-group-todo-title col-md-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter note title"/>
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