import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DetailsOfPlanCSS from './DetailsOfPlan.module.css';
import APackageDataMain from '../Data/PackagesData/APackageDataMain';

function DetailsOfPlan({ location }) {
  const pageData = APackageDataMain(location).planDetails;
  return (
    <Container
      fluid
      className={`mx-1 px-3 py-4 ${DetailsOfPlanCSS.detailsOfPlanBox} font-3`}
    >
      <Row className="my-3 mx-4 font-3">Details Of Plan</Row>
      <Row className="m-0 font-3">
        <ul className="mx-0 px-0">
          {pageData.map((singleData) => {
            return (
              <li className="d-flex" key={singleData.id}>
                <Col className="col-auto px-4">{singleData.dayNum}</Col>
                <section>
                  <div>{singleData.desData.desTitle}</div>
                  <ul style={{ listStyle: 'circle' }}>
                    {singleData.desData.data.map((singleDesData) => {
                      return <li>{singleDesData}</li>;
                    })}
                  </ul>
                </section>
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default DetailsOfPlan;
