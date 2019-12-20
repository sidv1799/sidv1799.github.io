import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './Projects.js';
import Resume from './Resume.js';
import Navbar from './Navbar.js';
import Home from './Home.js';

export default class App extends React.Component {
  render()
  {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </Router>
        
      </div>
    );
  }
  
}
