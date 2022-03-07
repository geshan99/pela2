import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HolidayPackagesMiddleCSS from './HolidayPackagesMiddle.module.css';
import TileComponentLayer from './TileComponentLayer';
import beachPackImg from '../assets/Home Page/Holiday packages/beach package.jpg';
import dolphinPackImg from '../assets/Home Page/Holiday packages/dolphin package.jpg';
import junglePackImg from '../assets/Home Page/Holiday packages/jungle package.jpg';

function HolidayPackagesMiddle() {
  const layerImgArray = [
    beachPackImg,
    dolphinPackImg,
    junglePackImg,
    beachPackImg,
    dolphinPackImg,
    junglePackImg,
    beachPackImg,
    dolphinPackImg,
    junglePackImg,
  ];
  const linkArray = [
    'packages/beachPackage',
    'packages/dolphinPackage',
    'packages/junglePackage',
    'packages/beachPackage',
    'packages/dolphinPackage',
    'packages/junglePackage',
    'packages/beachPackage',
    'packages/dolphinPackage',
    'packages/junglePackage',
  ];
  return (
    <Container
      fluid
      className={HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage}
    >
      <Row className="text-center d-flex justify-content-center my-5 font-0">
        Choose your dream holiday packages in Sri Lanka
      </Row>
      <Row className="text-center d-flex justify-content-center my-3 px-5 font-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, modi
        eaque! Quos ipsum explicabo repellendus doloribus suscipit labore
        consequuntur incidunt, accusamus consectetur, expedita nobis vitae
        nostrum inventore sit molestias magnam. Praesentium consequuntur
        assumenda excepturi omnis magnam numquam minus, quasi quia nostrum,
        ipsum autem porro fugit eligendi ad dicta a optio! Quibusdam fugiat quo
        beatae aliquam, est cumque esse enim, voluptatem, nulla fugit et
        inventore id? Voluptates ut voluptatibus excepturi qui!
      </Row>
      <TileComponentLayer
        type="type2"
        imgArray={layerImgArray}
        linkArray={linkArray}
      />
    </Container>
  );
}

export default HolidayPackagesMiddle;
