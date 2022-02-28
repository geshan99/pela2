import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import APackageMiddleCSS from './BriefPlanComp.module.css';
import briefPlanDataJSON from '../Data/BriefPlanData.data';

function BriefPlanComp({ briefPlanData }) {
  return (
    <Container
      fluid
      className={`m-4 px-4 py-3 ${APackageMiddleCSS.briefPlanBox}`}
    >
      <Row className="m-1 font-3">Brief Plan</Row>
      <Row className="m-0 font-3">
        <ul style={{ listStyleType: 'none' }} className="m-1 p-0">
          {briefPlanDataJSON.map((singlebriefPlanData) => {
            return (
              <li>
                {singlebriefPlanData.dayName}
                <span className="px-2">Lorem ipsum dolor sit amet</span>
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default BriefPlanComp;
