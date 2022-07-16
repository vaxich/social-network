
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import './App.css';
import {BrowserRouter, Route,} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";


type AppPropsType = {
    appState: any
    store:any
    dispatch:any
}


const App = () => {


    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>

                <div className="app__wrapper-content">
                    <Route path="/dialogs" 
                           render={() => <DialogsContainer   />}

                    />
                    <Route path="/profile:userId?"
                           render={() => <ProfileContainer />}/>
                    <Route path="/users"
                           render={() => <UsersContainer />}/>

                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
