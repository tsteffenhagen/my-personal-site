import React, { Component } from 'react';
import {Button, Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
        <Navbar inverse staticBottom className="App-footer">
            <Nav>
              <NavItem>
          <div>
          <a target="_blank" href="https://www.linkedin.com/in/tyler-steffenhagen-654a46153">LinkedIn </a>
          |
          <a target="_blank" href="https://github.com/tsteffenhagen"> GitHub</a>

          </div>
          </NavItem>
          </Nav>
          </Navbar>
    )
  }
}