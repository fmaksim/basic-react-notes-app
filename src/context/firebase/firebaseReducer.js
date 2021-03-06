import { ADD_NOTE, CHANGE_FILTER, FETCH_NOTES, REMOVE_NOTE, SEARCH_NOTE, SHOW_LOADER, TOGGLE_DONE } from "../types";

const handlers = {
    DEFAULT: state => state,
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    [FETCH_NOTES]: (state, {payload}) => ({
        ...state,
        notes: payload,
        loading: false,
    }),
    [SEARCH_NOTE]: (state, {payload}) => ({
        ...state,
        search: payload
    }),
    [CHANGE_FILTER]: (state, {payload}) => ({
        ...state,
        filter: payload
    }),
    [SHOW_LOADER]: (state) => ({...state, loading: true}),
    [TOGGLE_DONE] : (state, {payload}) => {
        const noteIndex = state.notes.findIndex(item => payload === item.id);
        const modifiedNote = {
            ...state.notes[noteIndex],
            done: !state.notes[noteIndex].done
        };

        const notes = [
            ...state.notes.slice(0, noteIndex),
            modifiedNote,
            ...state.notes.slice(noteIndex + 1)
        ];

        return {...state, notes: notes}
    }
};

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};