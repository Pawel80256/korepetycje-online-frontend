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
        try {
            const response = await axios.get('http://localhost:8080/api/teachers');
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }

    }
)

// export const getAllSubjects = createAsyncThunk(
//     'subjects',
//     async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/subjects');
//             console.log(response.data)
//         }
//     }
// )

const TeacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(getAllTeachers.fulfilled, (state, action) => {
            state.teachers = action.payload
        })
    })
})


export default TeacherSlice.reducer