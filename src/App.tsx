import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {SignIn} from "./Components/Authorization/SignIn/SignIn";
import {SignUp} from "./Components/Authorization/SignUp/SignUp";
// import Layout from "./components/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<SignIn/>}/>
                <Route path={'/login'} element={<SignIn/>}/>
                <Route path={'/registration'} element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;