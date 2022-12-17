import React from 'react';
import {NavigationBar} from "./navigation/NavigationBar";
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "./navigation/Routes";
import {LoginForm} from "./authentication/LoginForm";
import {CssBaseline} from "@mui/material";
import {SearchTeacherPage} from "./teacherComponents/searchTeacherPage/SearchTeacherPage";
import {TeacherPublicProfile} from "./teacherComponents/teacherPublicProfile/TeacherPublicProfile";
import {NewRegisterForm} from "./authentication/NewRegisterForm";


function App() {
    return (
        <>
            <NavigationBar/>
            <CssBaseline/>
            <Routes>
                <Route path={AppRoutes.HOME} element={<></>}/>
                <Route path={AppRoutes.REGISTER} element={<NewRegisterForm/>}/>
                <Route path={AppRoutes.LOGIN} element={<LoginForm/>}/>
                <Route path={AppRoutes.SEARCH} element={<SearchTeacherPage/>}/>
                <Route path={AppRoutes.TEACHER_PUBLIC_PROFILE} element={<TeacherPublicProfile/>}/>
            </Routes>
        </>
    );
}

export default App;
