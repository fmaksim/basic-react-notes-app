import React, { Fragment, useContext, useEffect } from 'react';
import FilterPanel from "../todo/filter-panel";
import SearchPanel from "../todo/search-panel";
import StatusPanel from "../todo/status-panel";
import TodoList from "../todo/todo-list";
import AddForm from "../todo/add-form";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import Loader from "../common/Loader";

export const Home = () => {
    const {notes, fetchNotes, loading} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Fragment>
            <StatusPanel todo={ 3 } done={ 1 }/>
            <AddForm/>
            <div className="d-flex">
                <SearchPanel/>
                <FilterPanel/>
            </div>
            { loading ? <Loader/> : <TodoList todos={ notes }/> }
        </Fragment>
    );
}