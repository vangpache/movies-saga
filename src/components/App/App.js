import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from  '../Home/Home';
// import Details from '../Details/Details';
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
      
          <div>
            <Home />
            {/* <Route exact path='/' component={Home} /> */}
            {/* <Route exact path='/details' component={Details} /> */}
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
