import {type} from "os";

export type postType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    message: string
}
export type ProfilePageType ={
    posts:Array<postType>
    newPostText:string
}
export type DialogsPageType ={
    dialogs:Array<dialogsType>
    messages:Array<messageType>

}
export type stateType ={
    profilePage :ProfilePageType
    dialogsPage:DialogsPageType

}
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let stateType;
let store:any = {
    _state:stateType = {
        profilePage :{
            posts : [
                { id: 1, message: "hello", likesCount: 12 },
                { id: 2, message: "how are you", likesCount: 3 },
                { id: 3, message: "bla bla", likesCount: 3 },
                { id: 4, message: "da da", likesCount: 3 }
            ],
            newPostText:"введите текст"
        },
        dialogsPage :{
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Pavel" },
                { id: 3, name: "Victor" },
                { id: 4, name: "Valera" },
                { id: 5, name: "Vika" },
                { id: 6, name: "Sasha" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "how are you" },
                { id: 3, message: "yo-yo" }
            ],
            newMessageBody: ""
        },



    },
    _callSubcriber(state: any) {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subckribe (observer:any)  {
        this._state._callSubcriber = observer;
    },

    
    dispatch(action:any) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message:this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText=""
            this._state._callSubcriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._state._callSubcriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubcriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubcriber(this._state)
        }

    },

}

export const addPostActionCreator =() =>  ({ type:  ADD_POST  })

export const updateNewPostTextActionCreator =(text:any) =>  ({ type:  UPDATE_NEW_POST_TEXT,    newText: text  })
export const sendMessageCreator =(text:any) =>  ({ type:  SEND_MESSAGE,    newText: text  })
export const updateNewMessageCreator =(body:any) =>  ({ type:  UPDATE_NEW_MESSAGE_BODY,    body: body  })







export default store;