import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../Redux/usersReduser";

let mapStateToProps =(state:any) => {
      
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);