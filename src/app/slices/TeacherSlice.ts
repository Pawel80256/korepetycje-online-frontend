import {TeacherDto} from "../../dtos/models/Teacher";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface TeacherState {
    teachers: TeacherDto[]
}

const initialState: TeacherState = {
    teachers: []
}

export const getAllTeachers = createAsyncThunk(
    'teachers/getAll',
    async () => {
        await axios.get('http://localhost:8080/api/teachers').then(response => {
            console.log(response)
        })
        // console.log('test')
    }
)

const TeacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
    extraReducers: (builder => {
    })
})


export default TeacherSlice.reducer