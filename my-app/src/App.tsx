import React from 'react';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route,} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app__wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className="app__wrapper-content">
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile"  component={Profile} />
        
      </div>


    </div>
    </BrowserRouter>
  );
}





export default App;
