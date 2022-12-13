import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getNotesAsync } from "./services";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: nanoid(),
                note: 'note 1',
                color: 'red',
            },
            {
                id: nanoid(),
                note: 'note 2',
                color: 'yellow',
            },
            {
                id: nanoid(),
                note: 'note 3',
                color: 'blue',
            },
        ],
        addNewNote: {
            isLoading: false,
            error: null,
        }
    },
    reducers: {
        changeActiveFilter: (state, action) => {
            state.activeFilterNote = action.payload
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter((item) => item.completed === false)
            state.items = filtered
        }
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
    },
})

export const selectNotes = (state) => state.notes.items
// export const selectActiveFilter = (state) => state.notes.activeFilterNote
export const noteList = (state) => state.notes.items

export const { changeActiveFilter, clearCompleted } = notesSlice.actions
export default notesSlice.reducer