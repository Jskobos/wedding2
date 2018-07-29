import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './containers/main/Main/Main.js';
import About from './containers/about/About/About';
import Travel from './containers/travel/Travel/Travel';
import Location from './containers/location/Location/Location.js';
import Registry from './containers/registry/Registry.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/location' component={Location}/>
            <Route path='/about' component={About}/>
            <Route path='/travel' component={Travel} />
            <Route path='/registry' component={Registry} />
            <Redirect from='/home' to="/" />
            <Route path='/' component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;
