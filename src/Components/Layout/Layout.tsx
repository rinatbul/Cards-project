import React from 'react';
import s from './Layout.module.css'
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <NavLink to="/">main</NavLink>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/registration">registration</NavLink>

            <Outlet/>
        </div>
    );
};

export default Layout;