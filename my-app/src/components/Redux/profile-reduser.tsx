

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts : [
        { id: 1, message: "hello", likesCount: 12 },
        { id: 2, message: "how are you", likesCount: 3 },
        { id: 3, message: "bla bla", likesCount: 3 },
        { id: 4, message: "da da", likesCount: 3 }
    ],
    newPostText:"введите текст"
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
        default: return  state;
    }

}
export const addPostActionCreator =() =>  ({ type:  ADD_POST  })
export const updateNewPostTextActionCreator =(text:any) =>  ({ type:  UPDATE_NEW_POST_TEXT,    newText: text  })