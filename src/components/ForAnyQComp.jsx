import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ForAnyQCompCSS from './ForAnyQComp.module.css';

function ForAnyQComp() {
  return (
    <Container fluid className={`m-4 px-4 py-3 ${ForAnyQCompCSS.QBox} font-3`}>
      <Row className="mx-0 my-3">For Any Questions</Row>
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Email</Row>
        <Row className="m-0">Telephone</Row>
        <Row className="m-0">Whatsapp</Row>
      </Row>
    </Container>
  );
}

export default ForAnyQComp;
