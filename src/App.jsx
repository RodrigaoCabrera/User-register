import './App.css';
import React, { useState, useEffect } from 'react';
import Inicio from './components/Inicio'
import PageSec from './components/PageSec'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [name, setName] = useState('Gilda')
  useEffect(() => {
    setTimeout(() => {
      setName('Dania')
    },2000)
  })

  return (
    <Router>
      <Link to='/inicio'>Inicio</Link>
      <Link to='/'>Pag secundaria</Link>

    <Switch>
      <Route path='/inicio/:nombre/:edad'>
        <Inicio />
      </Route>
      <Route exact path='/'>
        <PageSec />
        <h1>{name}</h1>
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
