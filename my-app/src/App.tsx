import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import './App.css';
import { dialogsType, messageType, postType } from './index';
import { BrowserRouter, Route,} from "react-router-dom";

type AppPropsType = {
  posts:  Array<postType>
  dialogs: Array<dialogsType>
  messages:Array<messageType>
}

const App = (props:AppPropsType) => {
  return (
    <BrowserRouter>
    <div className="app__wrapper">
      <Header />
      <Navbar />
      
      <div className="app__wrapper-content">
        <Route path="/dialogs" render={ ()=> <Dialogs dialogs={props.dialogs}  messages={props.messages}/>} />
        <Route path="/profile"  render={ ()=> <Profile posts = {props.posts}/>} />
        
      </div>


    </div>
    </BrowserRouter>
  );
}





export default App;
