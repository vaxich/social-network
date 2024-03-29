import React from "react";
import styles from "./users.module.css";
import { UserType} from "../Redux/usersReduser";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType ={
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged : (pageNumber:number) => void
    follow: (userId: number) => void,
    unfollow: (userId: number) => void ,
    followingInProgress: number[]
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i=1 ; i <= pagesCount; i++ ) {
        pages.push(i)
    }

    return    <div>
        <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                }
            )}
        </div>

        {
            props.users.map((u: UserType) => (
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={styles.userPhoto} src={u.photoUrl?.small ? u.photoUrl?.small : userPhoto}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some( id =>  id === u.id)}
                                onClick={() => {props.unfollow( u.id)}}>
                                Unfollow</button>

                            : <button disabled={props.followingInProgress.some( id  =>  id === u.id)}
                             onClick={() => {props.follow( u.id)}}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>
                </div>
            ))
        }
    </div>
}


export default Users;