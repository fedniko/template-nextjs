import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
// eslint-disable-next-line no-use-before-define
import React from 'react';

export default function MainCarousel({ products }: any) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    waitForAnimate: false,
    touchThreshold: 60,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          fade: true,
        },
      },
    ],
  };
  return (
    <section className="main__carousel">
      <Slider {...settings}>
        {products.map((product: any) => (
          <React.Fragment key={product.id}>
            <Container className="main__carousel__container">
              <Row className="align-items-center">
                <Col
                  xl={{ span: 6 }}
                  lg={{ span: 7 }}
                  md={{ span: 6 }}
                  sm={{ span: 12 }}
                >
                  <h2 className="main__carousel__heading">
                    AWESOME FURNITURES
                  </h2>
                  <p className="text main__carousel__text">{product.name}</p>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="button_outline main__carousel__button"
                  >
                    Take This Look
                  </Button>{' '}
                </Col>
                <Col
                  xl={{ span: 4, offset: 1 }}
                  lg="5"
                  md="6"
                  sm={{ span: 12 }}
                >
                  <img
                    className="main__carousel__img"
                    src={product.picture}
                    alt="carousel_pic"
                  />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        ))}
      </Slider>
    </section>
  );
}
