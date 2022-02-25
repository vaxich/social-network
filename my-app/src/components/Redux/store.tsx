import {type} from "os";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";
import {sidebarReduser} from "./sidebar-reduser";

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
        sidebar: {},



    },
    _callSubcriber(state: any) {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe (observer:any)  {
        this._state._callSubcriber = observer;
    },

    
    dispatch(action:any) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReduser(this._state.sidebar, action)
        this._state._callSubcriber(this._state)


    },

}











export default store;