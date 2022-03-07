import React from 'react';
import { Container } from 'react-bootstrap';
import WhereToGoUpper from './WhereToGoUpper';
import dolphin from '../assets/Home Page/Holiday packages/dolphin package.jpg';

function HolidayPackagesUpper() {
  return (
    <Container fluid className="p-0">
      <WhereToGoUpper backPhoto={dolphin} title={'Holiday Packages'} />
    </Container>
  );
}

export default HolidayPackagesUpper;
