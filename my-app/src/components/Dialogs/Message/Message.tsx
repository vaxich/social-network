import React from "react";
import style from "./../Dialogs.module.css";




export type MessagePropsType ={
    message:string
}



const Message =(props:MessagePropsType)=> {
    return <div className={style.dialog}>{props.message}</div>
}



export default Message;