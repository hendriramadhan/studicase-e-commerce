import { Carousel, Container } from "react-bootstrap";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.jpg";

export default function CarouseSlider() {
  return (
    <div>
      <Carousel fade className="mt-3">
        <Carousel.Item>
          <img
            className="img-slider d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slider d-block w-100"
            src={slider2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slider d-block w-100"
            src={slider2}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
