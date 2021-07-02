import { Col, Container, Row, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ItemList() {
  const [products] = useState([
    {
      id: 1,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item1.png',
    },
    {
      id: 2,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item2.png',
    },
    {
      id: 3,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item3.png',
    },
    {
      id: 4,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
    },
    {
      id: 5,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
    },
    {
      id: 6,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
    },
    {
      id: 7,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
    },
    {
      id: 8,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item8.png',
    },
  ]);
  return (
    <section className="itemList">
      <Container>
        <Row className="heading-div">
          <Col>
            <h1 className="heading">Top Trending Products</h1>
          </Col>
        </Row>
        <Row>
          {products.map((p) => (
            <Col xs="6" md="4" xl="3" key={p.id}>
              <div className="itemList__item">
                <div className="itemList__image">
                  <img
                    className="itemList__image_item"
                    src={p.picture}
                    alt="news3"
                  />
                </div>
                <div className="itemList__body">
                  <h2 className="itemList__heading">{p.name}</h2>
                  <p className="text itemList__price">${p.price}</p>
                </div>
                <Button variant="link">Add to Cart</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
