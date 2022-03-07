import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IncludeExcludeCSS from './IncludeExclude.module.css';
import APackageDataMain from '../Data/PackagesData/APackageDataMain';

function IncludeExclude({ location }) {
  const pageData = APackageDataMain(location).inExData;
  return (
    <Container
      fluid
      className={`m-3 p-3 ${IncludeExcludeCSS.IncludeExcludeBox} font-3`}
    >
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Includes</Row>
        {pageData.include.map((singleInData) => {
          return <Row className="mx-5">{singleInData}</Row>;
        })}
      </Row>
      <Row className="m-0 d-flex flex-column">
        <Row className="m-0">Excludes</Row>
        {pageData.exclude.map((singleExData) => {
          return <Row className="mx-5">{singleExData}</Row>;
        })}
      </Row>
    </Container>
  );
}

export default IncludeExclude;
