import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

var sectionStyle = {
  textAlign: "right"
};


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
            <Col md={6}>
            <h3>Work Experience</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <h5>Prime Digital Academy</h5>
            </Col>
            <Col md={6} style={sectionStyle}>
            <h5>September 2017 - March 2017</h5>
            </Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    )
  }
}
// Prime Digital Academy
// Full Stack Software Development Student
// • Solo Project: Gamers MN
// o CreatedGamersMNtofillagapintheTwinCitiesthatallowspeopletoorganize
// events for games ranging from board to card games.
// o Userscreateaccountswheretheycancreateeventsonaninteractivecalendar,
// send event invites to other users, and manage their own personal game
// collection.
// o UsesSQL,Express,AngularJS,Node.js,JavaScript,alongwithBootstrapUI
// • Group Project: Hustle
// o Ourclientwaslookingforawaytoconnectpeoplerunningtheirownprojects
// o
// o o
// IWCO Direct
// Quality Control Specialist
// April 2017 – Current
// with collaborators who have skills they are looking for and that are willing to work for pay or trade Workedonateamwithfourotherprimestudentstocompleteprojectwhileusing GIT for integration and Agile methodology UsesAngularJs.Node.js,Express.js,AngularJSMaterial,SQL,Nodemailer. createyourhustle.herokuapp.com
// • Worked collaboratively with other departments to do quality control of documents for clients using web applications such as OneProof and Compart/Compare
// • Led a small team in developing a priority list for tracking client jobs 
// C.H. Robinson June 2016 – April 2017 
// Carrier Services Representative 
// • Assisted carriers with migrating from old phone application(CHRW Trucks) to new Navisphere Carrier application
// • Worked with the Federal Motor Carrier Safety Administration to process insurance paperwork