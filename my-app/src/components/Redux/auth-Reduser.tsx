import {authAPI} from "../../api/api";


const SET_USER_DATA = "SET_USER_DATA"

let authInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}



export type InitialStateType = typeof authInitialState

export const authReduser =(state: InitialStateType = authInitialState, action:any):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true

                }
        default: return state;                    
            }
        
    }


export const setAuthUserData =(id:any, email:any, login:any) =>  ({ type:  SET_USER_DATA, data : {id: id, email: email, login: login}})
export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login));
            }
        });
}