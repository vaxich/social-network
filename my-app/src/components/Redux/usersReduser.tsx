

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";



let initialState = {
    users : [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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

export type InitialStateType = {
    users :   UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return{ ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter( id => id != action.userID)}
        }

        default: return state;                    
            }
        
    }


export const follow =(userID:any) =>  ({ type:  FOLLOW,   userID})
export const unfollow =(userID:any) =>  ({ type:  UNFOLLOW, userID  })
export const setUsers =(users:any) =>  ({ type:  SET_USERS, users  })
export const setCurrentPage =(currentPage:any) =>  ({ type:  SET_CURRENT_PAGE, currentPage  })
export const setTotalUsersCount =(totalUsersCount:any) =>  ({ type:  SET_TOTAL_USERS_COUNT, totalUsersCount  })
export const toggleIsFetching =(isFetching:boolean) =>  ({ type:  TOGGLE_IS_FETCHING, isFetching  })
export const toggleFollowingProgress =(isFetching:boolean, userId:any) =>  ({ type:  TOGGLE_IS_FOLLOWING_PROGRESS, isFetching , userId })