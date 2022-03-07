import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { IoLocationSharp, IoMailSharp, IoLogoFacebook } from 'react-icons/io5';
import {
  IoMdCall,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import LocationComp from './LocationComp';
import './Footer.css';
function Footer() {
  return (
    <Container
      fluid
      className="mx-0 d-flex justify-content-between footer-container"
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      <Col className="col-auto">
        <h3 className="mx-0 font-0">Pela Holiday</h3>
        <Row md="auto" className="mx-0 my-1 font-4">
          36/1<br></br>
          Nugegoda Road<br></br>
          Pepiliyana<br></br>
          Sri Lanka
        </Row>
        <Row className="mx-0 font-4">+94 70 441 1511</Row>
        <Row className="mx-0 my-1 font-4">info@pelaholidays.lk</Row>
        <Row className="mx-0 my-3 font-4">
          <LocationComp
            height="12vw"
            width="12vw"
            location={[6.857735, 79.893163]}
          />
        </Row>
      </Col>
      <Col className="col-auto">
        <Container
          // className="h-75 w-75"
          className=""
          style={{
            backgroundColor: 'white',
            height: '23vw',
            width: '23vw',
          }}
        ></Container>
      </Col>
      <Col className="col-auto mx-0">
        <Row className="d-flex flex-column m-0 font-4 row-auto">
          <a href="/" style={{ color: 'white' }}>
            Home
          </a>
          <a href="/wheretogo" style={{ color: 'white' }}>
            Where to go
          </a>
          <a href="/wheretogo" style={{ color: 'white' }}>
            What to do
          </a>
          <a href="/packages" style={{ color: 'white' }}>
            Holiday Packages
          </a>
          <a href="/packages" style={{ color: 'white' }}>
            Plan your holiday
          </a>
          <a href="/about" style={{ color: 'white' }}>
            About us
          </a>
          <a href="/contact" style={{ color: 'white' }}>
            Contact us
          </a>
        </Row>
        <Row className="m-0 row-auto">
          <IoLogoFacebook
            style={{ color: '#2044FF' }}
            className="my-1 font-0"
          />
          <IoLogoInstagram
            style={{ color: '#C84E93' }}
            className="m-1 font-0"
          />
          <IoLogoLinkedin
            style={{ color: '#0077B5' }}
            className="my-1 font-0"
          />
          <IoLogoWhatsapp style={{ color: '#64B161' }} className="m-1 font-0" />
        </Row>
      </Col>
    </Container>
  );
}

export default Footer;
