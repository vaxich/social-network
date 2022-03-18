const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

export const dialogsReduser =(state = initialState, action:any) => {
    
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state, messages: [...state.messages, { id: 6, message: body }], newMessageBody: ""};
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        default: return state
    }

}

export const sendMessageCreator = () =>  ({ type:  SEND_MESSAGE  })
export const updateNewMessageCreator =(body:any) =>  ({ type:  UPDATE_NEW_MESSAGE_BODY,    body: body  })