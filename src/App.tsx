import React from 'react';
import {NavigationBar} from "./navigation/NavigationBar";
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "./navigation/Routes";
import {LoginForm} from "./authentication/LoginForm";
import {CssBaseline} from "@mui/material";
import {SearchTeacherPage} from "./teacherComponents/searchTeacherPage/SearchTeacherPage";
import {TeacherPublicProfile} from "./teacherComponents/teacherPublicProfile/TeacherPublicProfile";
import {RegisterForm} from "./authentication/RegisterForm";
import {ClientProfile} from "./clientComponents/clientProfile/ClientProfile";
import {Roles} from "./app/enums/Roles";
import {AdminPanel} from "./adminComponents/AdminPanel";


function App() {
    const role = localStorage.getItem("role")
    return (
        <>
            <NavigationBar/>
            <CssBaseline/>
            <Routes>
                <Route path={AppRoutes.HOME} element={<></>}/>
                <Route path={AppRoutes.REGISTER} element={<RegisterForm/>}/>
                <Route path={AppRoutes.LOGIN} element={<LoginForm/>}/>
                <Route path={AppRoutes.SEARCH} element={<SearchTeacherPage/>}/>
                <Route path={AppRoutes.TEACHER_PUBLIC_PROFILE} element={<TeacherPublicProfile/>}/>
                {role === Roles.CLIENT &&
                <Route path={AppRoutes.CLIENT_PROFILE} element={<ClientProfile/>}/>
                }
                <Route path={AppRoutes.ADMIN_PANEL} element={<AdminPanel/>}/>

            </Routes>
        </>
    );
}

export default App;
