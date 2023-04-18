import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {SignIn} from "./Components/SignIn/SignIn";
import {SignUp} from "./Components/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import Forgot from "./Components/Forgot/Forgot";
import SetPass from "./Components/SetPass/SetPass";
import Profile from "./Components/Profile/Profile";
import Packs from "./Components/packs/Packs";

// import Layout from "./components/Layout";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={''} element={<SignIn/>}/>
                    <Route path={'login'} element={<SignIn/>}/>
                    <Route path={'registration'} element={<SignUp/>}/>
                    <Route path={'forgot'} element={<Forgot/>}/>
                    <Route path={'setPass'} element={<SetPass/>}/>
                    <Route path={'profile'} element={<Profile/>}/>
                    <Route path={'packs'} element={<Packs/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;