import React, { Component } from "react";
import AppBar from "./components/appBar/appBar";
// import NavBar from './components/navBar/navBar';
import { Routes, Route, Redirect } from "react-router-dom";
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
       
        <Routes>
          <Route path="/blog/:id"  element={<Blogs/>} />
          <Route path="/emailMarket" element={<EmailMarket/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/copywriting" element={<CopyWriting/>} />
          <Route path="/blog" element={<Blog/>} />
          {/* <Route path="/not-found" element={<NotFound/>} /> */}
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/" exact element={<Home/>} />
          {/* <Redirect to="/not-found" /> */}
        </Routes>
      </div>
    );
  }
}
export default App;
