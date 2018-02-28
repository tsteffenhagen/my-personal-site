import React, { Component } from 'react';
import FA from 'react-fontawesome';
import Footer from '../Footer/Footer';
import image from '../../images/test.png';
import image2 from '../../images/Banner.png';
import { Carousel } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const bgColors = {
  "Blue": "#00B1E1"
};




export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <Grid className="fluid">
        <div style={{backgroundColor : bgColors.Blue, width: '100%'}}>
          <Row >
            <Col md={6}>
              <h1>This is the about page </h1>
            </Col>
            <Col md={6}>
              <p>2 of 2</p>
        </Col>
          </Row>
          </div>
          <Row>
            <Col md={3}>
            </Col>
            <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={400} alt="" src={image} />

            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={400} alt="" src={image2} />

            </Carousel.Item>
          </Carousel>
          </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}