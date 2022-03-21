import React from "react";
import { InitialStateType } from "../Redux/usersReduser";
import styles from "./users.module.css"

type UsersType = {
    users:Array<InitialStateType>
    follow: any
    unfollow: any
    setUsers:any
}

const Users =(props:UsersType) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", followed: false, fullName: "Pavel", status: "i am here", location: {city: "Moscow", country: "Russia"} },
            { id: 2, photoUrl: "https://cspromogame.ru//storage/upload_images/avatars/3981.jpg", followed: false, fullName: "Dimich", status: "i am boss", location: {city: "Minsk", country: "Belarus"} },
            { id: 3, photoUrl: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg", followed: true, fullName: "Valera", status: "i am ungry", location: {city: "Kiev", country: "Ukraine"} },
            { id: 4, photoUrl: "https://android-obzor.com/wp-content/uploads/2022/02/1-4.jpg", followed: true, fullName: "Viktor", status: "i am bizi", location: {city: "Tbilisi", country: "Georgia"} },])
    }
    
    return <div>
        {
            props.users.map((u:any)  => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={u.photoUrl} alt="" />
                    </div>
                    <div>
                        {u.follow ?
                        <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> :
                        <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                 </div>)
        }
    </div>
}

export default Users;