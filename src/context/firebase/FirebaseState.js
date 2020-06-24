import React, { useReducer } from 'react';
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, TOGGLE_DONE } from "../types";
import FirebaseApiService from "../../services/firebaseApiService";

export const FirebaseState = ({children}) => {
    const firebaseApiService = new FirebaseApiService();
    const initialState = {
        notes: [],
        loading: false
    };

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => {
        dispatch({
            type: SHOW_LOADER
        });
    }

    const onFailServerRequest = (e) => {
        return new Promise((resolve, reject) => {
            reject(e);
        })
    }

    const onCreateNote = (response, note) => {
        let validResponse = response.hasOwnProperty('name') ? true : false;
        if (validResponse) {
            note.id = response.name;
            dispatch({
                type: ADD_NOTE,
                payload: note
            });
        }

        return new Promise((resolve, reject) => {
            if (validResponse) {
                resolve(note);
            } else {
                reject(new Error('Wrong server response!'));
            }
        });
    };

    const onFetchNotes = (response) => {
        const notes = response !== null ? Object.keys(response)
            .map((id) => {
                return {...response[id], id}
            }) : [];

        dispatch({
            type: FETCH_NOTES,
            payload: notes
        });
    }

    const addNote = (note) => {
        return firebaseApiService
            .saveNote(note)
            .then((response) => onCreateNote(response, note))
            .catch(onFailServerRequest);
    };

    const fetchNotes = () => {
        showLoader();
        firebaseApiService
            .fetchNotes()
            .then(onFetchNotes);
    };

    const onRemoveNote = (id) => {
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        });

        return new Promise((resolve) => {
            resolve(true);
        });
    }

    const removeNote = (id) => {
        return firebaseApiService
            .removeNote(id)
            .then((res) => {onRemoveNote(id)})
            .catch(onFailServerRequest);
    }

    const onToggleDone = (id) => {
        dispatch({
            type: TOGGLE_DONE,
            payload: id
        });
    }

    const toggleDone = (id) => {
        const note = {...state.notes.find(item => item.id === id)};
        note.done = !note.done;

        return firebaseApiService
            .updateNote(note)
            .then(() => onToggleDone(id))
            .catch(onFailServerRequest)
    }

    return (
        <FirebaseContext.Provider value={ {
            addNote, fetchNotes, removeNote, toggleDone,
            notes: state.notes,
            loading: state.loading,
        } }>
            { children }
        </FirebaseContext.Provider>
    );
};