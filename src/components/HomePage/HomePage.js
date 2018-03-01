import React, { Component } from 'react';
import FA from 'react-fontawesome';
import Footer from '../Footer/Footer';
import image from '../../images/carousel1.png';
import image2 from '../../images/carousel2.png';
import { Carousel } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Background from '../../images/home.png';

const bgColors = {
  "Blue": "#00B1E1"
};

var sectionStyle = {
    height: "725px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };


export default class HomePage extends Component {
  render() {
    return (
      <div>

        <header className="App-header" style={sectionStyle}>
        </header>
        <Grid className="fluid">
    
        <div style={{backgroundColor : bgColors.Blue, width: '100%'}}>
          <Row >
            <Col md={6}>
              <h1>Home Page </h1>
            </Col>
            <Col md={6}>
              <p>2 of 2</p>
        </Col>
          </Row>
          </div>
        </Grid>
        <Footer />
      </div>
    )
  }
}