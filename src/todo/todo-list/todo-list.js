import React from 'react';
import TodoItem from "../todo-item";
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.scss';

const TodoList = ({todos}) => {
    const list = todos.length > 0 ? todos.map((item) => {
        return <CSSTransition
            in={ true }
            key={ item.id }
            timeout={ 800 }
            classNames="note"
        >
            <TodoItem todo={ item }/>
        </CSSTransition>
    }) : null;

    return (
        <div>
            { list ?
                <TransitionGroup component="ul" className="list-group">
                    { list }
                </TransitionGroup> : <p>Notes list is empty!</p> }
        </div>
    );
};

TodoList.propTypes = {
    notes: PropTypes.array.isRequired
};

TodoList.defaultProps = {
    notes: []
};

export default TodoList;