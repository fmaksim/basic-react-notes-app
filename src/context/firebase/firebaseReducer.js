import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, TOGGLE_DONE } from "../types";

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