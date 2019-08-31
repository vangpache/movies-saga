import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from  '../Home/Home';
import Details from '../Details/Details';
// import Edit from '../Edit/Edit';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <br/>
            {/* <Home /> */}
          <Route exact path='/' component={Home} />
          <Route path='/details' exact component={Details} />
        </div>
        
      </Router>
      
    );
  }
}

export default connect () (App);
