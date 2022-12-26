import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk('notes/getNotesAsync', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`)
    return res.data
})

export const addNoteAsync = createAsyncThunk('notes/addNoteAsync', async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`, data)
    return res.data
})

export const toggleNoteAsync = createAsyncThunk('notes/toggleNoteAsync', async ({ id, data }) => {
    const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes/${id}`, data)
    return res.data
})

export const removeNoteAsync = createAsyncThunk('notes/removeNoteAsync', async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes/${id}`)
    return id
})