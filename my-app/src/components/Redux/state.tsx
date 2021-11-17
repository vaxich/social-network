import { rerenderEntireTree } from "../../render"

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
}
export type DialogsPageType ={
    dialogs:Array<dialogsType>
    messages:Array<messageType>

}
export type stateType ={
    profilePage :ProfilePageType
    dialogsPage:DialogsPageType
    
}





let state:stateType = {
    profilePage :{
        posts : [
            { id: 1, message: "hello", likesCount: 12 },
            { id: 2, message: "how are you", likesCount: 3 },
            { id: 3, message: "bla bla", likesCount: 3 },
            { id: 4, message: "da da", likesCount: 3 }
        ]
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
    
    
}


export let addPost =(postMessage:any)=> {
    let newPost = {
        id: 5,
        message:postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;