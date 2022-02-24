import React, {ChangeEvent, ChangeEventHandler} from "react";
import style from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';
import Message, {MessagePropsType} from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsType, messageType, sendMessageCreator, updateNewMessageCreator} from "../Redux/state";


type DialogsPropsType = {

    store: any

}


const Dialogs = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map((dialog: dialogsType) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = state.messages.map((message: messageType) => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator)
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
       props.store.dispatch(updateNewMessageCreator(body))
        console.log(body)
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