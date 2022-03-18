import React, {ChangeEvent, ChangeEventHandler, ReactNode} from "react";

import {sendMessageCreator, updateNewMessageCreator} from "../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";


type DialogsPropsType = {

    store: any

}




let mapStateToProps =(state:any) => {
    return {dialogsPage: state.dialogsPage}
}
let mapDispatchToProps =(dispatch:any) => {
    return {
        sendMessage: () => {dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body:any)=> {dispatch(updateNewMessageCreator(body))}
    }
        
        
    }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
    export default DialogsContainer;