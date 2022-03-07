import React from 'react';
import './RoundImgLayer.css';
import { Container } from 'react-bootstrap';

function RoundImg({ img }) {
  return (
    <Container
      style={{
        width: '15vw',
        height: '15vw',
        borderRadius: '100%',
        backgroundImage: `url("${img}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '3px solid #01ff48',
      }}
      fluid
    ></Container>
  );
}

export default RoundImg;
