import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import FA  from 'react-fontawesome';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tyler Steffenhagen</h1>
          <div>
            <Link to="" className="btn btn-sm"><h5>Home</h5></Link>
            {"|"}
            <Link to="about" className="btn btn-sm"><h5>About page</h5></Link>
            {"|"}
            <Link to="resume" className="btn btn-sm"><h5>Resume</h5></Link>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
