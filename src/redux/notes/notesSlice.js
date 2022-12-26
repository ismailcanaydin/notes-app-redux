import { createSlice } from "@reduxjs/toolkit";
import { addNoteAsync, getNotesAsync, removeNoteAsync } from "./services";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        addNewNote: {
            isLoading: false,
            error: null,
        }
    },
    reducers: {
        removeNote: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        },
    },
    extraReducers: {
        // get notes
        [getNotesAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [getNotesAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [getNotesAsync.rejected]: (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        },

        //add note
        [addNoteAsync.pending]: (state, action) => {
            state.addNewNote.isLoading = true;
        },
        [addNoteAsync.fulfilled]: (state, action) => {
            state.addNewNote.isLoading = false;
            state.items.push(action.payload);
        },
        [addNoteAsync.rejected]: (state, action) => {
            state.addNewNote.isLoading = false;
            state.addNewNote.error = action.error.message;
        },
        // remove todo
        [removeNoteAsync.fulfilled]: (state, action) => {
            const id = action.payload
            const index = state.items.findIndex((item) => item.id === id)
            state.items.splice(index, 1)
        }
    },
})

export const selectNotes = (state) => state.notes.items
// export const selectActiveFilter = (state) => state.notes.activeFilterNote
export const getNotes = (state) => state.notes.items

export const { addNewNote, removeNote } = notesSlice.actions
export default notesSlice.reducer