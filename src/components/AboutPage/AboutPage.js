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

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <br />
        <Grid className="fluid">
          <Row >
            <Col md={1}>
            </Col>
            <Col md={3}>
              <Image height={180} width={180} src={me} circle />
            </Col>
            <Col md={7}>
              <h2>About Me:</h2><br />
              <p>
                I am a recent graduate from Prime Digital Academy and am looking to get started on my
                path as a Software Developer. I believe that the internet is a great equalizer and can
                helps people big an small get their message out into the world where people can hear it.
                I've been with my fiance, who is an amazing photojournalist and artist, since 2012 and we
                love to travel the world together. I've included some photos of our travels below. I'm looking
                forward to seeing where my career in Software Development brings me.
              </p>
            </Col>
          </Row><br />
          <Row>
            <Col md={2}>
            </Col>
            <Col md={8}>
              <Carousel>
                <Carousel.Item>
                  <img width={900} alt="" src={image} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} alt="" src={image2} />
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