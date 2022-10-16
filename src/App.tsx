import React from 'react';
import {NavigationBar} from "./navigation/NavigationBar";
import {RegisterForm} from "./authentication/RegisterForm";


function App() {
    return (
        <>
            <NavigationBar/>
            <RegisterForm/>
        </>
    );
}

export default App;
