import React, {ChangeEvent, ChangeEventHandler, ReactNode} from "react";

import {sendMessageCreator, updateNewMessageCreator} from "../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import Redirect from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type DialogsPropsType = {

    store: any

}




let mapStateToProps =(state:any) => {
    return {dialogsPage: state.dialogsPage

    }
}
let mapDispatchToProps =(dispatch:any) => {
    return {
        sendMessage: () => {dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body:any)=> {dispatch(updateNewMessageCreator(body))}
    }
        
        
    }


    export default compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs);