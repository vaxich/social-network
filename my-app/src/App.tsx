import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import './App.css';
import {BrowserRouter, Route,} from "react-router-dom";
import store, {stateType} from './components/Redux/state';

type AppPropsType = {
    appState: any
    store:any
    dispatch:any
}


const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>

                <div className="app__wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs store={props.store}  />}

                    />
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.appState.profilePage}
                                                  dispatch={props.dispatch}/>}/>

                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
