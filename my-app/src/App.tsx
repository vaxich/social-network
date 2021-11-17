import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import './App.css';
import { BrowserRouter, Route,} from "react-router-dom";
import { stateType } from './components/Redux/state';

type AppPropsType = {
  appState: stateType
  addPost:any
}


const App = (props:AppPropsType) => {


  return (
    <BrowserRouter>
    <div className="app__wrapper">
      <Header />
      <Navbar />
      
      <div className="app__wrapper-content">
        <Route path="/dialogs" render={ ()=> <Dialogs dialogs={props.appState.dialogsPage.dialogs}  messages={props.appState.dialogsPage.messages}/>} />
        <Route path="/profile"  render={ ()=> <Profile posts = {props.appState.profilePage.posts} addPost={props.addPost}/>} />
        
      </div>


    </div>
    </BrowserRouter>
  );
}





export default App;
