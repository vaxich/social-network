import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../Redux/usersReduser";

let mapStateToProps =(state:any) => {
      
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps =(dispatch:any) => {
    return {
        follow: (userID:any) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID:any) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);