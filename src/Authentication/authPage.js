import { useState, useEffect } from 'react';

import Home from './homePage';
import Login from './loginPage';
import firebase  from './firebase';

import './auth.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { ModalProvider } from "state/ModalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Auth() 
{
  const [user, setUser] = useState(null);

  useEffect(() => { firebase.auth().onAuthStateChanged(user => {setUser(user);}) }, [])

  return (
    <div className="app">
      {
        (user)?( <Home user={user} /> ):( <Login/> ) 
      }
    </div>
  );
}

export default Auth;
