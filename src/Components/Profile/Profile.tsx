import React from 'react';
import s from "./Profile.module.css";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.img} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profole image"/>
            <div>Avatar url:
                <span> 12345</span>
            </div>
            <div>Name:
                <span> Martinas</span>
            </div>

            <div>
                <button className={s.button}>
                    <Link className={s.link} to="/">LogOut</Link>
                </button>
            </div>
            <div>
                <button className={s.button}>get users</button>
            </div>

        </div>
    );
};

export default Profile;