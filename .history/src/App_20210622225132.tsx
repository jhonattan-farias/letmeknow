import React from 'react';
import { createContext,useState } from 'react';

import {BrowserRouter,Route} from 'react-router-dom'
import {firebase,auth} from './services/firebase'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'


interface User {
  id:string
  avatar:string
  name:string
}
interface AuthContextProps{
  user:User
  signInWithGoogle:() => void
}

export const AuthContext = createContext({} as AuthContextProps)


function App() {
  const [user,setUser] = useState<User>({} as User)

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

      const response = await auth.signInWithPopup(provider).then(response => {
          
      })

}

  return (
    <BrowserRouter>
    <AuthContext.Provider value={{user,signInWithGoogle}}>
      <Route path='/' exact component={Home} />
      <Route path='/rooms/new' component={NewRoom} />
    </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
