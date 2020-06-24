import React from 'react';
import TodoItem from "../todo-item";
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.scss';

const TodoList = ({todos}) => {
    const list = todos.length > 0 ? todos.map((item) => {
        return <CSSTransition
            key={ item.id }
            timeout={ 800 }
            classNames="note"
        >
            <TodoItem todo={ item }/>
        </CSSTransition>
    }) : <p>Notes list is empty!</p>;

    return (
        <div>
            <TransitionGroup component="ul" className="list-group">
                { list }
            </TransitionGroup>
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