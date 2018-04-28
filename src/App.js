import React, { Component } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Projects />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
