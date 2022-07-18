import React from "react";
import styles from "./users.module.css";
import { UserType} from "../Redux/usersReduser";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users = (props: any) => {

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
                            ? <button disabled={props.followingInProgress.some( id =>  id === u.id)} onClick={() => {
                                props.toggleFollowingPropgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` ,  {
                                    withCredentials:true,
                                    headers: {
                                        "API-KEY" : "4a93d057-d084-4a69-a91d-384fa34f59d8"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingPropgress(false, u.id)
                                });



                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some( id  =>  id === u.id)} onClick={() => {
                                props.toggleFollowingPropgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` , {}, {
                                    withCredentials:true,
                                    headers: {
                                        "API-KEY" : "4a93d057-d084-4a69-a91d-384fa34f59d8"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingPropgress(false, u.id)
                                });


                            }}>Follow</button>}

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