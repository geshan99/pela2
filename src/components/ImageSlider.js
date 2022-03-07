import { Carousel, Image } from 'react-bootstrap';
import ninearch from '../assets/Home Page/Moving Photos/Ella.jpg';
import safari from '../assets/Home Page/Moving Photos/Safari.jpg';
import whale from '../assets/Home Page/Moving Photos/whale watching.jpg';
import stilt from '../assets/Home Page/Moving Photos/Stilt fishing.jpg';
import pinnawala from '../assets/Home Page/Moving Photos/pinnawala.jpg';
import anuradhapura from '../assets/Home Page/Moving Photos/anuradhapura.jpg';
import ImageSliderCSS from './ImageSlider.module.css';

function ImageSlider() {
  return (
    <div>
      <Carousel
        controls={true}
        nextLabel={''}
        prevLabel={''}
        className="mainPageCarousel"
      >
        <Carousel.Item>
          <Image src={ninearch} className="w-100  "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Nine Arch</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={safari} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Safari</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={whale} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Whale watching</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={stilt} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Stilt fishing</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pinnawala} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Pinnawala</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={anuradhapura} className="w-100 "></Image>
          <Carousel.Caption>
            <h5 className="carousel-topic">Anuradhapura</h5>
            <p className="carousel-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt eget nullam non nisi est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
