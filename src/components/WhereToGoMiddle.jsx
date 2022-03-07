import React from 'react';
import { Container } from 'react-bootstrap';
import './WhereToGoMiddle.css';
import TileComponentLayer from './TileComponentLayer';
import anuradhapura from '../assets/Where to go/Photos for circles/anuradhapura.jpg';
import arugambay from '../assets/Where to go/Photos for circles/arugambay.jpg';
import caveTemple from '../assets/Where to go/Photos for circles/cave temple.jpg';
import dalada from '../assets/Where to go/Photos for circles/dalada maligawa.jpg';
import galle from '../assets/Where to go/Photos for circles/Galle.jpg';
import hikkaduwa from '../assets/Where to go/Photos for circles/Hikkaduwa.jpg';
import hortonPlace from '../assets/Where to go/Photos for circles/Horton Place.jpg';
import minneriya from '../assets/Where to go/Photos for circles/minneriya national park.jpg';
import mirissa from '../assets/Where to go/Photos for circles/Mirissa.jpg';

function WhereToGoMiddle() {
  const layerImgArray = [
    anuradhapura,
    arugambay,
    caveTemple,
    dalada,
    galle,
    hikkaduwa,
    hortonPlace,
    minneriya,
    mirissa,
  ];
  const linkArray = [
    'wheretogo/anuradhapura',
    'wheretogo/arugambay',
    'wheretogo/caveTemple',
    'wheretogo/dalada',
    'wheretogo/galle',
    'wheretogo/hikkaduwa',
    'wheretogo/hortonPlace',
    'wheretogo/minneriya',
    'wheretogo/mirissa',
  ];

  return (
    <Container
      fluid
      className=" bg-blend-multiply whereToGoBackGroundImage py-5 d-absolute"
    >
      <TileComponentLayer
        type="type1"
        imgArray={layerImgArray}
        linkArray={linkArray}
      />
    </Container>
  );
}

export default WhereToGoMiddle;
