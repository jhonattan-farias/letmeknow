import React from 'react';
import { createContext,createC } from 'react';

import {BrowserRouter,Route} from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'

export const AuthContext = createContext


function App() {
  const [user,setUser] = useState()

  return (
    <BrowserRouter>
    <Route path='/' exact component={Home} />
    <Route path='/rooms/new' component={NewRoom} />
    </BrowserRouter>
  )
}

export default App;
