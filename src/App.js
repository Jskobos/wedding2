import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './containers/navbar/Navbar/Navbar.js';
import Main from './containers/main/Main/Main.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route path='/' component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;
