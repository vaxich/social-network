import { connect } from "react-redux";
import React from "react";

import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../Redux/usersReduser";

import axios from "axios";
import Users from "./Users";

type UsersType = {
    users: Array<UserType>
    follow: any
    unfollow: any
    setUsers: any
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: any
    setTotalUsersCount:any

}

class UsersContainer extends React.Component<UsersType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {


        return  <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
        />
    }

}

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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);