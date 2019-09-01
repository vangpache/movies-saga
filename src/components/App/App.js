import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from  '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#8bbabb',
      },
      secondary: {
        main: '#464159',
      },
    },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
 

  })



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header>
              <NavBar />
            </header>
            <br />
            {/* <Home /> */}
            <Route exact path='/' component={Home} />
            <Route path='/details' exact component={Details} />
            <Route path='/edit' exact component={Edit} />
          </div>
        </Router>
      </MuiThemeProvider>
      
      
    );
  }
}

export default connect () (App);
