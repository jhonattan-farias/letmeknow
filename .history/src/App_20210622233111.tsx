import React from 'react';
import { createContext,useState,useEffect } from 'react';


import {BrowserRouter,Route} from 'react-router-dom'
import {firebase,auth} from './services/firebase'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'



function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider >

      <Route path='/' exact component={Home} />
      <Route path='/rooms/new' component={NewRoom} />
    </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
