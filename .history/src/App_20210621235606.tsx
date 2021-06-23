import React from 'react';

import {BrowserRouter,Route} from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={} />
    </BrowserRouter>
  )
}

export default App;
