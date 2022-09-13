import React, { Component } from "react";
import AppBar from "./components/appBar/appBar";
// import NavBar from './components/navBar/navBar';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contactus/contact";
import About from "./pages/about/about";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        {/* <NavBar/> */}
        {/* <About /> */}

      <Switch>
      <Route path="/contact" component={Contact}/>
      <Route path="/blog" component={Blog}/>
      <Route path = "/about" component={About}/>
      <Route path="/"  component={Home}/>
  
      </Switch>
      </div>
    );
  }
}

export default App;
