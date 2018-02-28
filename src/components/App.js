import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import FA  from 'react-fontawesome';
import {Button, Navbar, Nav, NavItem} from 'react-bootstrap';
import Background from '../images/home.png'

var sectionStyle = {
  height: "725px",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <header className="App-header" style={ sectionStyle }>
        <Navbar inverse fixedTop>
          <Navbar.Header>

          <h1 className="App-title">Tyler Steffenhagen</h1>
            </Navbar.Header>
            <Nav>
              <NavItem>
          <div>
            <Link to=""><Button bsStyle="link"><h5>Home</h5></Button></Link>
            {"|"}
            <Link to="about"><Button bsStyle="link"><h5>About Page</h5></Button></Link>
            {"|"}
            <Link to="resume"><Button bsStyle="link"><h5>Resume</h5></Button></Link>
          </div>
          </NavItem>
          </Nav>
          </Navbar>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
