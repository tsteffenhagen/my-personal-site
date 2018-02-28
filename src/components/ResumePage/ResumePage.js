import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';


export default class ResumePage extends Component {
  render() {
    return (
      <div>
        <Grid className="fluid">
          <Row >
            <Col md={4}>
            </Col>
            <Col md={6}>
              <h1>Tyler L Steffenhagen</h1>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
            <p>steffenhagen.tyler@gmail.com</p>
            </Col>
            <Col md={4}>
            <p>(612)-597-1279</p>
            </Col>
            <Col md={3}>
            <p>github.com/tsteffenhagen</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <h3>Skills</h3>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <ul>
            <li>Mean Stack</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>AngularJS</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Jquery</li>
            </ul>
            </Col>
            <Col md={4}>
            <ul>
            <li>AngularJS Material</li>
            <li>GitHub</li>
            <li>Agile Methodology</li>
            <li>JavaScript</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Bootstrap</li>
            </ul>
            </Col>
            <Col md={4}>
            <ul>
            <li>Passport</li>
            <li>ES 6</li>
            <li>File Stack</li>
            <li>AngularBootstrapUI</li>
            <li>Nodemailer</li>
            <li>Google Oauth</li>
            <li>API ‘s</li>
            </ul>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <h3>Work Experience</h3>
            </Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    )
  }
}