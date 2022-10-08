import React, { Component } from "react";
import AppBar from "./components/appBar/appBar";
// import NavBar from './components/navBar/navBar';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contactus/contact";
import About from "./pages/about/about";
import NotFound from "./pages/not-found/notFound";
import Services from "./pages/services/services";
import CopyWriting from "./pages/copywriting/copyWriting";
import EmailMarket from "./pages/emailMarketing/emailMarket";
import Blogs from "./pages/blogs/blogs";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
       
        <Switch>
          <Route path="/blog/:id"  component={Blogs} />
          <Route path="/emailMarket" component={EmailMarket} />
          <Route path="/contact" component={Contact} />
          <Route path="/copywriting" component={CopyWriting} />
          <Route path="/blog" component={Blog} />
          {/* <Route path="/not-found" component={NotFound} /> */}
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
