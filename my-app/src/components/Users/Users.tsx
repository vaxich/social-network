import React from "react";
import {InitialStateType, UserType} from "../Redux/usersReduser";
import axios from "axios";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/avatar.png"


type UsersType = {
    users: Array<UserType>
    follow: any
    unfollow: any
    setUsers: any

}

class Users extends React.Component<UsersType> {

    componentDidMount(): void {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        return <div>

            {
                this.props.users.map((u: UserType) => (
                    <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={u.photoUrl?.small ? u.photoUrl?.small : userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
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

}

export default Users;