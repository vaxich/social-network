

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";



let initialState = {
    users : [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export type UserType = {
    id: number,
    photoUrl: {
        small: null | string,
        large: null | string
    },
    followed: boolean,
    name: string,
    status: string,
    // location: {city: string, country: string}
}

export type InitialStateType = typeof initialState

export const usersReduser =(state: InitialStateType = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map( (u:any) => {
                    if(u.id === action.userID) {
                        return {...u, followed:true}
                    }
                    return u ;
                } )
                }
        case UNFOLLOW :
                    return {
                        ...state,
                        users: state.users.map( (u:any) => {
                            if(u.id === action.userID) {
                                return {...u, followed:false}
                            }
                            return u ;
                        } )
                        } 
        case SET_USERS: {
            return {...state, users:action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        default: return state;                    
            }
        
    }


export const followAC =(userID:any) =>  ({ type:  FOLLOW,   userID})
export const unfollowAC =(userID:any) =>  ({ type:  UNFOLLOW, userID  })
export const setUsersAC =(users:any) =>  ({ type:  SET_USERS, users  })
export const setCurrentPageAC =(currentPage:any) =>  ({ type:  SET_CURRENT_PAGE, currentPage  })
export const setUsersTotalCountAC =(totalUsersCount:any) =>  ({ type:  SET_TOTAL_USERS_COUNT, totalUsersCount  })