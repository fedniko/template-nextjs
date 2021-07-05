// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

export default function ItemCarousel() {
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
  const [products] = useState([
    {
      id: 1,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item1.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 2,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item2.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 3,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item3.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 4,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 5,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 6,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 7,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 8,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item8.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
  ]);
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
              {products.map((p) => (
                <React.Fragment key={p.id}>
                  <div className="itemList__item">
                    <div className="itemList__image">
                      <img
                        className="itemList__image_item"
                        src={p.picture}
                        alt="news3"
                      />
                    </div>
                    <div className="itemList__body">
                      <div className="itemList__colors">
                        {p.colors.map((color) => (
                          <button
                            type="button"
                            style={{ background: color }}
                            key={color}
                          />
                        ))}
                      </div>
                      <h2 className="itemList__heading">{p.name}</h2>
                      <p className="text itemList__price">${p.price}</p>
                    </div>
                    <Button variant="link">Add to Cart</Button>
                  </div>
                </React.Fragment>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
