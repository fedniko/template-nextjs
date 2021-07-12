import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Bucklo Wrop Wooden Table',
      img: '/commerce_img/cart/item1.png',
      color: 'Brown',
      dimension: '40x60 cm',
      quantity: 1,
      price: 69.36,
    },
    {
      id: 2,
      name: 'Rivet Geometric Ceramic Wallclock',
      img: '/commerce_img/cart/item2.png',
      color: 'Black',
      dimension: '40x60 cm',
      quantity: 1,
      price: 24.78,
    },
  ]);

  function deleteItem(index: number) {
    const currentState = items;
    const updatedState = currentState.filter((item) => item.id !== index);
    setItems(updatedState);
  }

  return (
    <section className="wishlist">
      <Container>
        <Row>
          <Col className="heading d-flex justify-content-start mb-3">
            My Wishlist
          </Col>
        </Row>
        <Row className="wishlist__mainRow">
          <Col>
            <Row className="wishlist__headRow">
              <Col xs="1" />
              <Col xs="3">Products</Col>
              <Col className="d-flex justify-content-center" xs="1">
                Total
              </Col>
              <Col className="d-flex justify-content-center" xs="2">
                Available
              </Col>
              <Col className="d-flex justify-content-center" xs="2">
                Quantity
              </Col>
              <Col xs="3" />
            </Row>
            {items.map((item) => (
              <Row className="wishlist__itemsRow" key={item.name}>
                <Col className="wishlist__itemsRow__delete" xs="1">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="wishlist__itemsRow__delete__button"
                    type="button"
                  >
                    <img
                      src="/commerce_img/authModal/ic-close.svg"
                      alt="close"
                    />
                  </button>
                </Col>
                <Col className="wishlist__itemsRow__item" xs="3">
                  <img
                    className="wishlist__itemsRow__item__img"
                    src={item.img}
                    alt="item_img"
                  />
                  <div className="wishlist__itemsRow__item__descr">
                    <p className="wishlist__itemsRow__item__descr__name">
                      {item.name}
                    </p>
                    <p className="wishlist__itemsRow__item__descr__color">
                      Color: {item.color}
                    </p>
                    <p className="wishlist__itemsRow__item__descr__dimension">
                      Dimension: {item.dimension}
                    </p>
                  </div>
                </Col>
                <Col className="wishlist__itemsRow__total" xs="1">
                  ${item.price}
                </Col>
                <Col className="wishlist__itemsRow__available" xs="2">
                  In Stock
                </Col>
                <Col className="wishlist__itemsRow__quantity" xs="2">
                  <div className="wishlist__itemsRow__quantity__input">
                    <div className="wishlist__itemsRow__quantity__input__count">
                      {item.quantity}
                    </div>
                    <div className="wishlist__itemsRow__quantity__input__arrows">
                      <button type="button">
                        <img
                          className="wishlist__itemsRow__quantity__input__arrows"
                          src="/commerce_img/cart/arrow-up.svg"
                          alt="arrow_up"
                        />
                      </button>
                      <button type="button">
                        <img
                          className="wishlist__itemsRow__quantity__input__arrows"
                          src="/commerce_img/cart/arrow-down.svg"
                          alt="arrow_down"
                        />
                      </button>
                    </div>
                  </div>
                </Col>
                <Col className="wishlist__itemsRow__buttons" xs="3">
                  <Button variant="outline-primary" className="button_outline">
                    View Product
                  </Button>
                  <Button variant="primary" className="button">
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
