import React from 'react';

import {BrowserRouter,Route} from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'
import { AuthContextProvider } from './contexts/AuthContextProvider';



function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider >
      <Route path='/' exact component={Home} />
      <Route path='/rooms/new' exact component={NewRoom} />
      <Route path='/rooms/:id' component={Room} />
    </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
