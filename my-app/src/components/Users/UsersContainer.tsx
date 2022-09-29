import { connect } from "react-redux";
import React from "react";

import {
    follow, unfollow,
    setCurrentPage,
    UserType, toggleFollowingProgress, getUsers
} from "../Redux/usersReduser";


import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {AppStateType} from "../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
    isFetching: boolean
    toggleIsFetching:any
    toggleFollowingProgress: any
    getUsers:any


}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber:number) => {

        this.props.getUsers(pageNumber, this.props.pageSize);


    }

    render() {



        return <>
            {this.props.isFetching ? <Preloader /> : null}
        <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            followingInProgress ={this.props.followingInProgress}

        />
        </>
    }

}

let mapStateToProps =(state:AppStateType) => {
      
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

type MapStatePropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

type MapDispatchPropsType ={
    follow: (userId: number) => void,
    unfollow: (userId: number) => void ,
    setCurrentPage: (pageNumber:number) => void ,
    toggleFollowingProgress : (isFetching:boolean, userId:number) => void,
    getUsers: (currentPage:number, pageSize:number) => void
}

type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType




export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        { follow, unfollow,
            setCurrentPage,
            toggleFollowingProgress, getUsers }

))(UsersContainer)
