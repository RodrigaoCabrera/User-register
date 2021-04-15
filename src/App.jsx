import './App.css';
import React, { useState, useEffect } from 'react';
import Usuarios from './components/Usuarios'
import User from './components/User'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <Link to='/'>Usuarios</Link>
     

    <Switch>
      <Route exact path='/'>
        <Usuarios />
      </Route>
      <Route path='/usuario/:id'>
        <User />
      </Route>
    </Switch> 

    </Router>
  );
}

export default App;
