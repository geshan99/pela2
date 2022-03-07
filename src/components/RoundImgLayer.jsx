import React from 'react';
import './RoundImgLayer.css';
import { Container, Row } from 'react-bootstrap';
import { FcNext } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

function RoundImgLayer({ img, description, type, link }) {
  const navigate = useNavigate();
  if (description.length > 40) {
    description = description.slice(0, 40) + '...';
    console.log('working');
  }
  console.log(img);
  if (type === 'type1') {
    return (
      <Container
        className="containerRoundImg"
        fluid
        onClick={() => {
          navigate(`/${link}`);
        }}
      >
        <Container
          className="roundAvatar-1"
          style={{
            backgroundImage: `url("${img}")`,
          }}
          fluid
        ></Container>
        <Container className="layer-1" fluid>
          <Container className="header-content-1 font-4" fluid>
            {description}
            <FcNext style={{ fontSize: '70px' }} />
          </Container>
        </Container>
      </Container>
    );
  } else if (type === 'type2') {
    return (
      <Container
        className="containerRoundImg"
        fluid
        onClick={() => {
          navigate(`/${link}`);
        }}
      >
        <Container
          className="roundAvatar-2"
          style={{
            backgroundImage: `url("${img}")`,
          }}
          fluid
        ></Container>
        <Container className="layer-2" fluid>
          <Container className="header-content-2 font-4" fluid>
            {description}
            <FcNext style={{ fontSize: '70px' }} />
          </Container>
        </Container>
      </Container>
    );
  } else if (type === 'type3') {
    return (
      <Container
        className="containerRoundImg"
        fluid
        onClick={() => {
          navigate(`/${link}`);
        }}
      >
        <Container
          className="roundAvatar-1"
          style={{
            backgroundImage: `url("${img}")`,
          }}
          fluid
        ></Container>
        <Container className="layer-1" fluid>
          <Container className="header-content-1 font-4" fluid>
            {description}
            <FcNext style={{ fontSize: '70px' }} />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default RoundImgLayer;
