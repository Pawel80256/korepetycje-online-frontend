import {TeacherDto} from "../../dtos/models/Teacher";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {getTeachersBySubjectAndCity} from "../services/TeacherService";

export interface TeacherState {
    teachers: TeacherDto[]
    searchedTeachers: TeacherDto[]
}

const initialState: TeacherState = {
    teachers: [],
    searchedTeachers: []
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

export const getAllTeachersBySubjectAndCity = createAsyncThunk(
    'teachers/bySubjectAndCity',
    async ({subject, city}: { subject: string, city: string }) => {
        try {
            const response = await getTeachersBySubjectAndCity(subject, city)
            return response
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
        builder.addCase(getAllTeachersBySubjectAndCity.fulfilled, (state, action) => {
            state.searchedTeachers = action.payload
        })
    })
})


export default TeacherSlice.reducer