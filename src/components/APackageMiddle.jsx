import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import APackageMiddleCSS from './APackageMiddle.module.css';
import BookNowComp from './BookNowComp';
import BriefPlanComp from './BriefPlanComp';
import DetailsOfPlan from './DetailsOfPlan';
import ForAnyQComp from './ForAnyQComp';
import IncludeExclude from './IncludeExclude';
import { useNavigate } from 'react-router-dom';

function APackageMiddle({ location }) {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className={`bg-blend-multiply px-0 py-4 ${APackageMiddleCSS.aPackageMiddleBackGroundImage}`}
    >
      <Row className="d-flex justify-content-around m-0">
        <Col className="col-auto">
          <BriefPlanComp location={location} />
        </Col>
        <Col className="col-auto">
          <BookNowComp location={location} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-around m-0">
        <Col className="col-auto">
          <IncludeExclude location={location} />
        </Col>
        <Col className="col-auto">
          <ForAnyQComp location={location} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center m-0">
        <Col className="col-auto">
          <DetailsOfPlan location={location} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center m-4">
        <Button
          variant="primary"
          onClick={() => {
            navigate(`booking`);
          }}
        >
          Book this package
        </Button>
      </Row>
    </Container>
  );
}

export default APackageMiddle;
