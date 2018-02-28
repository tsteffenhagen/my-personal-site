import React, { Component } from 'react';
import FA from 'react-fontawesome';
import Footer from '../Footer/Footer';
import image from '../../images/carousel1.png';
import image2 from '../../images/carousel2.png';
import me from '../../images/test.png'
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const bgColors = {
  "Blue": "#00B1E1"
};

var imgStyle = {
  height: "171",
  width: "180"
};



export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <br />
        <Grid className="fluid">
          <Row >
            <Col md={3}>
              <Image height={180} width={180} src={me}  circle/>
            </Col>
            <Col md={9}>
              <h2>About Me:</h2><br/>
              <p></p>
        </Col>
          </Row><br/>
          <Row>
            <Col md={2}>
        </Col>
            <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <img width={900}  alt="" src={image} />
            </Carousel.Item>
            <Carousel.Item>
              <img width={900}  alt="" src={image2} />
            </Carousel.Item>
          </Carousel>
          </Col>
            <Col md={2}>
        </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}