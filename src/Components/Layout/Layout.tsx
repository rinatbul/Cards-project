import React from 'react';
import s from './Layout.module.css'
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={s.wrapper}>
            <NavLink to="/">main</NavLink>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/registration">registration</NavLink>
            <NavLink to="/forgot">forgot</NavLink>
            <NavLink to="/setPass">setPassword</NavLink>
            <NavLink to="/profile">profile</NavLink>
            <NavLink to="/packs">packs</NavLink>
            <Outlet/>
        </div>
    );
};

export default Layout;