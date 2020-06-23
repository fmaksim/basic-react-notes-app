import React, { useReducer } from 'react';
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES } from "../types";
import FirebaseApiService from "../../services/firebaseApiService";

export const FirebaseState = ({children}) => {
    const firebaseApiService = new FirebaseApiService();
    const initialState = {
        notes: [],
        loading: false
    };

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const onFailCreatingNote = (e) => {
        return new Promise((res, rej) => {
            rej(e);
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

        return new Promise((res, rej) => {
            if (validResponse) {
                res(note);
            } else {
                rej(new Error('Wrong server response!'));
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
        firebaseApiService
            .fetchNotes()
            .then(onFetchNotes);
    };

    return (
        <FirebaseContext.Provider value={ {
            addNote, fetchNotes,
            notes: state.notes
        } }>
            { children }
        </FirebaseContext.Provider>
    );
};