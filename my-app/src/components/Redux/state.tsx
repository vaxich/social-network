
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
            ]}


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
    addPost (postMessage:any) {
        let newPost = {
            id: 5,
            message:this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText=""
        this._state._callSubcriber(this._state);
    },
    updateNewPostText (newText:string) {


        this._state.profilePage.newPostText = newText;
        this._state._callSubcriber(this._state);
    },
    dispatch(action:any) {
        if(action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message:this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText=""
            this._state._callSubcriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._state._callSubcriber(this._state);
        }

    },

}








export default store;