import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';
import Message, {MessagePropsType} from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsType, messageType} from "../Redux/state";


type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogs.map((dialog: dialogsType) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.map((message: messageType) => <Message message={message.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                {dialogsElement}


            </div>
            <div className={style.messages}>
                {messageElements}


            </div>
        </div>
    )
}

export default Dialogs;