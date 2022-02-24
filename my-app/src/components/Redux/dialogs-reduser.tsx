const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogsReduser =(state:any, action:any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({ id: 6, message: body });
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        default: return state
    }

}

export const sendMessageCreator =(text:any) =>  ({ type:  SEND_MESSAGE,    newText: text  })
export const updateNewMessageCreator =(body:any) =>  ({ type:  UPDATE_NEW_MESSAGE_BODY,    body: body  })