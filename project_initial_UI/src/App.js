// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HelloWorld from './components/HelloWorld';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import LoginSignup from './pages/LoginSignup'; // Make sure it's correctly named
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
       
        <Switch>
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/" component={HelloWorld} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
