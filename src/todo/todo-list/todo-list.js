import React from 'react';
import TodoItem from "../todo-item";
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
    notes: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  notes: []
};

export default TodoList;