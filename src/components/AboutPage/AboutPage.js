import React, { Component } from 'react';
import FA from 'react-fontawesome';
import Footer from '../Footer/Footer';
import image from '../../images/test.png';
import image2 from '../../images/Banner.png';





export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
            <h1>This is the about page </h1>
        </div>
            <div className="col">
              2 of 2
        </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col">
              <div id="aboutCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src={image} alt="" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src={image2} alt="Second Slide" />
                  </div>
                  {/* <div className="carousel-item">
                    <img className="d-block img-fluid" src={image} alt="Third Slide" />
                  </div> */}
                </div>
                <a className="carousel-control-prev" href="#aboutCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#aboutCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}