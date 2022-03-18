import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import './App.css';
import {BrowserRouter, Route,} from "react-router-dom";
import store, {stateType} from './components/Redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                    <Route path="/dialogs" render={() => <DialogsContainer   />}

                    />
                    <Route path="/profile"
                           render={() => <Profile />}/>

                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
