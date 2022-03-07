import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ALocationSlider from './ALocationSlider';
import LocationComp from './LocationComp';
import ALocationMiddleCSS from './ALocationMiddle.module.css';

function ALocationMiddle({ sliderImgArr, bgImg, description, location }) {
  return (
    <Container
      fluid
      className={`bg-blend-multiply px-0 ${ALocationMiddleCSS.whereToGoBackGroundImage}`}
      style={{
        backgroundImage: `url("${bgImg}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Row className="m-0">
        <ALocationSlider sliderImgArr={sliderImgArr} />
      </Row>
      <Row className="font-3 text-center py-5 m-0">{description}</Row>
      <Row className="d-flex justify-content-around py-5 mx-0">
        <Col className="col-auto">
          <LocationComp height="25vw" width="25vw" location={location} />
        </Col>
        <Col
          className="border rounded-top rounded-bottom font-4 col-auto p-5"
          style={{ height: '200px', width: 'auto' }}
        >
          <Row className="text-left text-white">For any question</Row>
          <Row className="text-left text-white py-1">Email</Row>
          <Row className="text-left text-white">Telephone</Row>
          <Row className="text-left text-white my-1">Whatsapp</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ALocationMiddle;
