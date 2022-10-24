import React from 'react';
import {NavigationBar} from "./navigation/NavigationBar";
import {RegisterForm} from "./authentication/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppRoutes} from "./navigation/Routes";
import {LoginForm} from "./authentication/LoginForm";
import {TeacherListElement} from "./teacherComponents/TeacherListElement";


function App() {
    return (
        <>
            <NavigationBar/>
            <TeacherListElement/>

                <Routes>
                    <Route path={AppRoutes.REGISTER} element={<RegisterForm/>}/>
                    <Route path={AppRoutes.LOGIN} element={<LoginForm/>}/>
                </Routes>
        </>
    );
}

export default App;
