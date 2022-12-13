import { createAsyncThunk } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { noteList } from '../redux/notes/notesSlice'
import { getNotesAsync, removeNoteAsync, toggleNoteAsync } from '../redux/notes/services'

function NoteList() {
    const dispatch = useDispatch()
    const filteredNotes = useSelector(noteList)
    const notes = useSelector(state => state.notes.items);
    console.log(notes);

    // const isLoading = useSelector((state) => state.notes.isLoading)
    // const isError = useSelector((state) => state.notes.error)

    useEffect(() => {
        dispatch(getNotesAsync())
    }, [dispatch])

    // if (isLoading) {
    //     return <Loading />
    // }

    // if (isError) {
    //     return <Error message={isError} />
    // }

    return (
        <div style={{ height: 300, width: 300, color: '#000', marginLeft: '5px', backgroundColor: '#fffdd0', borderRadius: '10px' }}>
            <h1 style={{ textDecoration: 'underline' }}>Note List</h1>

            <ul className="todo-list">
                {
                    filteredNotes.map((item) => (
                        <li style={{ listStyleType: 'none', }} key={item.id} className={item.color ? item.color : ''}>
                            <div className="view">
                                <label>{item.note}</label>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NoteList