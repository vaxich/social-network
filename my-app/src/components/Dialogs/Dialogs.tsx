import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import Message, { MessagePropsType } from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { dialogsType } from "../..";

type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages:Array<MessagePropsType>
}


let dialogsElement = props.dialogs.map( (dialog: { name: string; id: number; })=>     <DialogItem name={dialog.name} id={dialog.id}/>);

let messageElements = props.messages.map( (message: { message: string; }) => <Message message={message.message}/> );

const Dialogs = (props:DialogsPropsType) => {
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