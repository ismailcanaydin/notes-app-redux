import { createSlice } from "@reduxjs/toolkit";
import { addNoteAsync, getNotesAsync, removeNoteAsync } from "./services";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        addNewNote: {
            isLoading: false,
            error: null,
        },
        filteredItem: ""
    },
    reducers: {
        removeNote: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        },
        filterNote: (state, action) => {
            state.filteredItem = action.payload;
        }
    },
    extraReducers: {
        // get note
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
        [addNoteAsync.fulfilled]: (state, action) => {
            state.addNewNote.isLoading = false;
            state.items.push(action.payload);
        },
        [addNoteAsync.rejected]: (state, action) => {
            state.addNewNote.isLoading = false;
            state.addNewNote.error = action.error.message;
        },
        // remove note
        [removeNoteAsync.fulfilled]: (state, action) => {
            const id = action.payload
            const index = state.items.findIndex((item) => item.id === id)
            state.items.splice(index, 1)
        },
        [removeNoteAsync.rejected]: (state, action) => {
            state.removeNote.isLoading = false;
            state.removeNote.error = action.error.message;
        },
    },
})

export const selectNotes = (state) => state.notes.items

export const getNotes = (state) => state.notes.items
export const getFilteredItem = (state) => state.notes.filteredItem

export const getItemsIsLoading = (state) => state.notes.isLoading

export const getItemsIsError = (state) => state.notes.error
export const addItemsIsError = (state) => state.notes.addNewNote.error
export const removeItemsIsError = (state) => state.notes.error


export const { addNewNote, removeNote, filterNote } = notesSlice.actions
export default notesSlice.reducer