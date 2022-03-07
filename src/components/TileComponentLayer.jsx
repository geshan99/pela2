import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RoundImgLayer from './RoundImgLayer';

function TileComponentLayer({ type, imgArray, linkArray }) {
  const description1 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate enim tempora consectetur? Reiciendis nesciunt, esse ex assumenda natus repudiandae.';

  return (
    <div>
      <Row>
        <Col>
          <RoundImgLayer
            img={imgArray[0]}
            description={description1}
            type={type}
            link={linkArray[0]}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={imgArray[1]}
            description={description1}
            type={type}
            link={linkArray[1]}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={imgArray[2]}
            description={description1}
            type={type}
            link={linkArray[2]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={imgArray[3]}
            description={description1}
            type={type}
            link={linkArray[3]}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={imgArray[4]}
            description={description1}
            type={type}
            link={linkArray[4]}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={imgArray[5]}
            description={description1}
            type={type}
            link={linkArray[5]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RoundImgLayer
            img={imgArray[6]}
            description={description1}
            type={type}
            link={linkArray[6]}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={imgArray[7]}
            description={description1}
            type={type}
            link={linkArray[7]}
          />
        </Col>
        <Col>
          <RoundImgLayer
            img={imgArray[8]}
            description={description1}
            type={type}
            link={linkArray[8]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TileComponentLayer;
