import React from 'react'
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Header /> 
      <Switch>
          <Route path='/navbar'>
            <Navbar />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
