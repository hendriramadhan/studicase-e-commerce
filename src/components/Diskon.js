import React, { useRef, useState } from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/index.css";
import slider from "../assets/slider1.png";
import slider2 from "../assets/slider2.jpg";

export default function Diskon() {
  return (
    <div className="mb-5">
      <h2 className="mt-5 mb-3">
        Diskon <Badge bg="primary me-3">12.12</Badge>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </h2>
      <div className="diskon">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 3,
            },
          }}
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <Card className="diskon-card position-relative">
                <Badge bg="primary position-absolute">12.12</Badge>
                <Card.Img variant="top" src={slider} />
                <Card.Body>
                  <Card.Title className="fs-2  fw-bold">Product</Card.Title>
                  <Card.Text>IDR 300.000</Card.Text>
                  <div className="beli-love">
                    <Button variant="primary" className="beli">
                      Beli
                    </Button>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
