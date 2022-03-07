import React from 'react';
import { Image } from 'react-bootstrap';

import { Container, Row } from 'react-bootstrap';
import InfoButtons from './InfoButtons';

function WhereToGoUpper({ backPhoto, title, type }) {
  console.log(backPhoto);
  return type === 'type1' ? (
    <Container
      fluid
      className="m-0 p-0 text-center"
      style={{ position: 'relative' }}
    >
      <Image
        src={backPhoto}
        style={{
          height: '100vh',
          width: '100%',
          objectFit: 'cover',
        }}
        className="mx-auto d-block "
      />
      <Container
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          color: 'white',
          transform: 'translateX(-50%)',
          fontSize: 'calc(2.6em + 2.8vw)',
        }}
      >
        {title}
      </Container>
      <Row
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          // backgroundColor: 'black',
          width: '70%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <InfoButtons title="Home" color="#DCEB25" link="/" textColor="black" />
        <InfoButtons
          title="Holiday Packages"
          color="#DCEB25"
          link="/packages"
          textColor="black"
        />
        <InfoButtons
          title="What to do"
          color="#DCEB25"
          link="whattodo"
          textColor="black"
        />
      </Row>
    </Container>
  ) : type === 'type2' ? (
    <Container
      fluid
      className="m-0 p-0 text-center"
      style={{ position: 'relative' }}
    >
      <Image
        src={backPhoto}
        style={{
          height: '100vh',
          width: '100%',
          objectFit: 'cover',
        }}
        className="mx-auto d-block "
      />
      <Container
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          color: 'white',
          transform: 'translateX(-50%)',
          fontSize: 'calc(2.6em + 2.8vw)',
        }}
      >
        {title}
      </Container>
      <Row
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          // backgroundColor: 'black',
          width: '70%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <InfoButtons title="Home" color="#DCEB25" link="/" textColor="black" />
        <InfoButtons
          title="Holiday Packages"
          color="#DCEB25"
          link="/packages"
          textColor="black"
        />
        <InfoButtons
          title="Where to go"
          color="#DCEB25"
          link="/wheretogo"
          textColor="black"
        />
      </Row>
    </Container>
  ) : (
    <Container
      fluid
      className="m-0 p-0 text-center"
      style={{ position: 'relative' }}
    >
      <Image
        src={backPhoto}
        style={{
          height: '100vh',
          width: '100%',
          objectFit: 'cover',
        }}
        className="mx-auto d-block "
      />
      <Container
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          color: 'white',
          transform: 'translateX(-50%)',
          fontSize: 'calc(2.6em + 2.8vw)',
        }}
      >
        {title}
      </Container>
      <Row
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          // backgroundColor: 'black',
          width: '70%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <InfoButtons title="Home" color="#DCEB25" link="/" textColor="black" />
        <InfoButtons
          title="Holiday Packages"
          color="#DCEB25"
          link="/packages"
          textColor="black"
        />
        <InfoButtons
          title="What to do"
          color="#DCEB25"
          link="whattodo"
          textColor="black"
        />
      </Row>
    </Container>
  );
}

export default WhereToGoUpper;
