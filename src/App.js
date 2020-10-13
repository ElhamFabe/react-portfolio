import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar/>
        <Route exact path="/" component={Main} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>

    );
  }
}

export default App;