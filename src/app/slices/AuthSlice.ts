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

// const user = JSON.parse(localStorage.getItem("user")!);

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

export const getUserData = createAsyncThunk(
    'userdata',
    async (id: string, {rejectWithValue}) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/userData/${id}`)
            console.log(response.data)
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
export const login = createAsyncThunk(
    "auth/login",
    async (request: LoginRequest, {rejectWithValue}) => {
        // const dispatch = useAppDispatch();
        try {
            const jwt = await axios.post('http://localhost:8080/api/authenticate', request);
            const data = parseJwt(jwt.data)
            localStorage.setItem("jwt", JSON.stringify(jwt.data));
            localStorage.setItem("userDataId", data.sub)
            return jwt;
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
            state.token = action.payload.data
        })
    })
})

export default AuthSlice.reducer