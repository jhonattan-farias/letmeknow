import React from 'react';
import { createContext,useState } from 'react';

import {BrowserRouter,Route} from 'react-router-dom'
import {firebase,auth} from 'firebase';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'

export const AuthContext = createContext({} as any)

  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider()

        auth.signInWithPopup(provider).then(response => {
            console.log(response)
        })
  }

function App() {
  const [user,setUser] = useState()

  return (
    <BrowserRouter>
    <AuthContext.Provider value={user,setUser}>
      <Route path='/' exact component={Home} />
      <Route path='/rooms/new' component={NewRoom} />
    </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;