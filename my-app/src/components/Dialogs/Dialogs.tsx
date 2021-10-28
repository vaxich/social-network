import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

export type DialogsPropsType ={
    id:number
    name:string
}

export type MessagePropsType ={
    message:string
}

const DialogItem = (props:DialogsPropsType) => {
    let path = '/dialogs/'+ props.id;
    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

const Message =(props:MessagePropsType)=> {
    return <div className={style.dialog}>{props.message}</div>
}

let dialogsData = [
    {id:1, name:"Dimych"},
    {id:2, name:"Dimych"},
    {id:3, name:"Dimych"},
    {id:4, name:"Dimych"},
    {id:5, name:"Dimych"},
    {id:6, name:"Dimych"}
]
let messageData =[
    {id:1, message:"Hi"},
    {id:2, message:"how are you"},
    {id:3, message:"yo-yo"}
]
const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                
                

            </div>
            <div className={style.messages}>
                <Message message={messageData[0].message}/> 
                <Message message={messageData[1].message}/> 
                <Message message={messageData[2].message}/> 
                
                
            </div>
        </div>
    )
}

export default Dialogs;