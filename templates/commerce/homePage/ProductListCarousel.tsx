// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import ProductItem from './ProductItem';

export default function ProductListCarousel({ products }: any) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    waitForAnimate: false,
    touchThreshold: 15,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          fade: true,
          arrows: false,
          dots: true,
          speed: 800,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className="itemCarousel">
      <Container>
        <Row className="heading-div">
          <Col>
            <h1 className="heading">New Arrival</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider {...settings}>
              {products.map((p: any) => (
                <React.Fragment key={p.id}>
                  <ProductItem p={p} />
                </React.Fragment>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
