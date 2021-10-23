import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'> Dimych </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'> Andrey </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'> Sveta </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'> Sasha </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/5'> Viktor </NavLink>
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.dialog}>Hi</div>
                <div className={style.dialog}> how are you</div>
                <div className={style.dialog}>yo-yo</div>
            </div>
        </div>
    )
}

export default Dialogs;