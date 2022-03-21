

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type InitialStateType = {
    users: Array <{id: number,
             photoUrl: string, 
             followed: boolean, 
             fullName: string, 
             status: string, 
             location: {city: string, country: string}}>}

let initialState: InitialStateType  = {
    users : [ 
    ]
}

export const usersReduser =(state = initialState, action:any):InitialStateType => {
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
            return {...state, users: [...state.users, ...action.users]}
        }   
        default: return state;                    
            }
        
    }


export const followAC =(userID:any) =>  ({ type:  FOLLOW,   userID})
export const unfollowAC =(userID:any) =>  ({ type:  UNFOLLOW, userID  })
export const setUsersAC =(users:any) =>  ({ type:  SET_USERS, users  })