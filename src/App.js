import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { colors } from "./config";

import Header from "./components/Header";
import AboveHeader from "./components/AboveHeader";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div
            style={{
              backgroundColor: colors.background
            }}
          >
            <AboveHeader />
            <Header />
            <Container>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
