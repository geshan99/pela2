import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HolidayPackagesMiddleCSS from './HolidayPackagesMiddle.module.css';
import OurTeam from './OurTeam';
import './OurTeam.css';

function AboutUsMiddle() {
  return (
    <Container
      fluid
      className={HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage}
    >
      <div className="cont-sec">
        <Row className="text-center d-flex justify-content-center ">
          <h2>
            We are<br></br> Pela Holidays
          </h2>
        </Row>
        <Row className=" mid-text ">
          <center>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus, viverra vitae congue eu, consequat
              ac felis donec et odio pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus
            </p>
          </center>
        </Row>
        <Row className="text-center d-flex justify-content-center  ">
          <h2>Our Team</h2>
        </Row>
        <Row className="text-center d-flex justify-content-center">
          <OurTeam />
        </Row>
      </div>
    </Container>
  );
}

export default AboutUsMiddle;
