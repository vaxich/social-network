import React, {ChangeEvent, ChangeEventHandler} from "react";
import style from "./Dialogs.module.css";

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsType, messageType} from "../Redux/store";



type DialogsPropsType = {

    sendMessage: any
    updateNewMessageBody:any
    dialogsPage:any


}


const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((dialog: dialogsType) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElements = state.messages.map((message: messageType) => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = (text:any ) => {

        props.sendMessage();
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
       props.updateNewMessageBody(body)

    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                {dialogsElement}


            </div>
            <div className={style.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="введите Ваше сообщение">

                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>SEND</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;