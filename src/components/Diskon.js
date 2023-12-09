import React, { useRef, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/index.css";
import slider from "../assets/slider1.png";
import slider2 from "../assets/slider2.jpg";

export default function Diskon() {
  return (
    <>
      <Container>
        <h2 className="mt-5 mb-3">Diskon</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          className="mySwiper"
          spaceBetween={20}
        >
          <SwiperSlide>
            <Card style={{ width: "331px" }}>
              <Card.Img variant="top" src={slider} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "331px" }}>
              <Card.Img variant="top" src={slider2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "331px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
