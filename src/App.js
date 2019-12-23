import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Divider } from "semantic-ui-react";

import WelcomeMessage from "./Welcome.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Experience from "./Experience.js";
import Links from "./Links.js";
import Gallery from "./Gallery.js";

//TODO
//Add WelcomeMessage later
//Add video link for twister
//Add TA experience tab

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Divider hidden />
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </div>
          <Divider />
          <Links />
        </Router>
      </div>
    );
  }
}
