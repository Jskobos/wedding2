import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './containers/main/Main/Main.js';
import About from './containers/about/About/About.js';
import Location from './containers/location/Location/Location.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/location' component={Location}/>
            <Route path='/about' component={About}/>
            <Redirect from='/home' to="/" />
            <Route path='/' component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;
