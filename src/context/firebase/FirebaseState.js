import React, { useReducer } from 'react';
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";
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

    const onFailCreatingNote = (e) => {
        return new Promise((resolve, reject) => {
            reject(e);
        });
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
        const notes = Object.keys(response)
            .map((id) => {
                return {...response[id], id}
            });

        dispatch({
            type: FETCH_NOTES,
            payload: notes
        });
    }

    const addNote = (note) => {
        return firebaseApiService
            .saveNote(note)
            .then((response) => onCreateNote(response, note))
            .catch(onFailCreatingNote);
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

    const onFailRemoveNote = (e) => {
        return new Promise((resolve, reject) => {
            reject(e);
        })
    }

    const removeNote = (id) => {
        return firebaseApiService
            .removeNote(id)
            .then((res) => {onRemoveNote(id)})
            .catch(onFailRemoveNote);
    }

    return (
        <FirebaseContext.Provider value={ {
            addNote, fetchNotes, removeNote,
            notes: state.notes,
            loading: state.loading,
        } }>
            { children }
        </FirebaseContext.Provider>
    );
};