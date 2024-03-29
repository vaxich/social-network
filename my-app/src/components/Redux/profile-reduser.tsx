import {profileAPI, usersAPI} from "../../api/api";


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts : [
        { id: 1, message: "hello", likesCount: 12 },
        { id: 2, message: "how are you", likesCount: 3 },
        { id: 3, message: "bla bla", likesCount: 3 },
        { id: 4, message: "da da", likesCount: 3 }
    ],
    newPostText:"введите текст",
    profile: null,
    status:""
}

export const profileReduser =(state = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message:state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts], newPost, newPostText: ""};
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {...state, newPostText : action.newText}
        }
        case SET_USER_PROFILE: {
            return  {...state, profile : action.profile}
        }
        case SET_STATUS: {
            return  {...state, status : action.status}
        }
        default: return  state;
    }

}
export const addPostActionCreator =() =>  ({ type:  ADD_POST  })
export const setUserProfile =(profile:any) =>  ({ type:  SET_USER_PROFILE,    profile  })
export const setStatus =(status:string) =>  ({ type:  SET_STATUS,    status  })
export const getUserProfile =(userId:any) => (dispatch:any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));

    });
}
export const getStatus =(userId:any) => (dispatch:any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));

    });
}
export const updateStatus =(status:string) => (dispatch:any) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }


    });
}
export const updateNewPostTextActionCreator =(text:any) =>  ({ type:  UPDATE_NEW_POST_TEXT,    newText: text  })

export default profileReduser;