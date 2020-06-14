import React, { Fragment } from 'react';
import FilterPanel from "../todo/filter-panel";
import SearchPanel from "../todo/search-panel";
import StatusPanel from "../todo/status-panel";
import TodoList from "../todo/todo-list";
import AddForm from "../todo/add-form";

export const Home = () => {
    const todos = [
        {id: 1, name: 'Note 1', important: false, done: true},
        {id: 2, name: 'Note 1', important: true, done: false},
        {id: 3, name: 'Note 1', important: true, done: true},
        {id: 4, name: 'Note 1', important: false, done: true},
        {id: 5, name: 'Note 1', important: true, done: false},
    ];
    return (
        <Fragment>
            <StatusPanel todo={3} done={1} />
            <AddForm />
            <div className="d-flex">
                <SearchPanel />
                <FilterPanel />
            </div>
            <TodoList todos={todos} />
        </Fragment>
    );
}