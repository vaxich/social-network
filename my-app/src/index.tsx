import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type postType = {
  id: number
  message: string
  likesCount: number
}
export type dialogsType ={
  id:number
  name:string
}
export type messageType ={
  id:number
  message:string
}

let posts: Array<postType> = [
  { id: 1, message: "hello", likesCount: 12 },
  { id: 2, message: "how are you", likesCount: 3 },
  { id: 3, message: "bla bla", likesCount: 3 },
  { id: 4, message: "da da", likesCount: 3 }

]

let dialogs:Array<dialogsType> = [
  {id:1, name:"Dimych"},
  {id:2, name:"Pavel"},
  {id:3, name:"Victor"},
  {id:4, name:"Valera"},
  {id:5, name:"Vika"},
  {id:6, name:"Sasha"}
]


let messages:Array<messageType> =[
  {id:1, message:"Hi"},
  {id:2, message:"how are you"},
  {id:3, message:"yo-yo"}
]


ReactDOM.render(
  <React.StrictMode>
    <App  posts={posts} 
          dialogs ={dialogs}
          messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
