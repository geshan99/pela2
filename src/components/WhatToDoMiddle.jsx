import React from 'react';
import { Container } from 'react-bootstrap';
import HolidayPackagesMiddleCSS from './HolidayPackagesMiddle.module.css';
import TileComponentLayer from './TileComponentLayer';
import hiking from '../assets/What to do/Photos for circles/Hiking.jpg';
import kiteSurfing from '../assets/What to do/Photos for circles/kite surfing.jpg';
import safari from '../assets/What to do/Photos for circles/safari.jpg';
import scubaDiving from '../assets/What to do/Photos for circles/Scuba diving.jpg';
import stiltFishing from '../assets/What to do/Photos for circles/Stilt fishing.jpg';
import surfing from '../assets/What to do/Photos for circles/surfing.jpg';
import waterRafting from '../assets/What to do/Photos for circles/water rafting.jpg';
import waterSports from '../assets/What to do/Photos for circles/water sports.jpg';
import whaleWatching from '../assets/What to do/Photos for circles/whale watching.jpg';

function WhatToDpMiddle() {
  const layerImgArray = [
    hiking,
    kiteSurfing,
    safari,
    scubaDiving,
    stiltFishing,
    surfing,
    waterRafting,
    waterSports,
    whaleWatching,
  ];
  const linkArray = [
    'wheretogo/hiking',
    'wheretogo/kiteSurfing',
    'wheretogo/safari',
    'wheretogo/scubaDiving',
    'wheretogo/stiltFishing',
    'wheretogo/surfing',
    'wheretogo/waterRafting',
    'wheretogo/waterSports',
    'wheretogo/whaleWatching',
  ];
  return (
    <Container
      fluid
      className={HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage}
    >
      <br></br>
      <TileComponentLayer
        type="type3"
        imgArray={layerImgArray}
        linkArray={linkArray}
      />
    </Container>
  );
}

export default WhatToDpMiddle;
