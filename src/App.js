import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontPage from "./Components/frontpage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        
          <Route exact path='/' component={ FrontPage }/>
    
        </ Switch>
      </div>
    );
  }
}

export default App;
