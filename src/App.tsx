import React from 'react';
import {NavigationBar} from "./navigation/NavigationBar";
import {RegisterForm} from "./authentication/RegisterForm";
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "./navigation/Routes";
import {LoginForm} from "./authentication/LoginForm";
import {CssBaseline} from "@mui/material";
import {SearchTeacherPage} from "./teacherComponents/searchTeacherPage/SearchTeacherPage";


function App() {
    return (
        <>
            <NavigationBar/>
            <CssBaseline/>
            <SearchTeacherPage></SearchTeacherPage>
            {/*<SearchTeacherForm/>*/}
            {/*<TeacherListElement teacher={{} as TeacherDto}/>*/}
            {/*<TeacherList teacherss={[]}></TeacherList>*/}
            <Routes>
                <Route path={AppRoutes.HOME} element={<></>}/>
                <Route path={AppRoutes.REGISTER} element={<RegisterForm/>}/>
                <Route path={AppRoutes.LOGIN} element={<LoginForm/>}/>
            </Routes>
        </>
    );
}

export default App;
