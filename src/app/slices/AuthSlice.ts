import {initialUserDataDto} from "../../dtos/models/UserData";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {LoginRequest, RegisterRequest} from "../../dtos/requests/Authentication";
import axios from "axios";
import {parseJwt} from "../utils/utils";

export interface authState {
    userData: any, //todo: type
    token: string
}

const initialState: authState = {
    userData: initialUserDataDto,
    token: ''
}

const user = JSON.parse(localStorage.getItem("user")!);

export const registerTeacher = createAsyncThunk(
    'teacher/register',
    async (request: RegisterRequest, {rejectWithValue}) => {
        try {
            await axios.post('http://localhost:8080/api/teacher', request)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (request: LoginRequest, {rejectWithValue}) => {
        try {
            const jwt = await axios.post('http://localhost:8080/api/authenticate', request);
            console.log(jwt)
            const data = parseJwt(jwt.data)
            console.log(data)
            // return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk("auth/logout", async () => {
    console.log("logout")
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
        })
    })
})

export default AuthSlice.reducer