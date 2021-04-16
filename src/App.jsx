import './App.css';
import React, { useState, useEffect } from 'react';
import Admin from './components/Admin'
import Inicio from './components/Inicio'
import Login from './components/Login'
import Menu from './components/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  

  return (
    <div className='container'>
    <Router>
    <Menu />  

    <Switch>
      <Route exact path='/' component={Inicio}></Route>
      <Route path='/admin/' component={Admin}></Route>
      <Route path='/login/' component={Login}></Route>
      
    </Switch> 

    </Router>
    </div>
  );
}

export default App;
