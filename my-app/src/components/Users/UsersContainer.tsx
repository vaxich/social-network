import { connect } from "react-redux";
import React from "react";

import {
    follow, unfollow,
    setCurrentPage,
    UserType, toggleFollowingProgress, getUsers
} from "../Redux/usersReduser";


import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";


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

class UsersContainer extends React.Component<UsersType> {

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

        />
        </>
    }

}

let mapStateToProps =(state:any) => {
      
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps =(dispatch:any) => {
//     return {
//         follow: (userID:any) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID:any) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users:any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber:number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount:number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps,
    { follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress, getUsers })(UsersContainer);