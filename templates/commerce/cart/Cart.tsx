import { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();
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

  if (items.length === 0) {
    return (
      <section className="cart">
        <Container>
          <Row>
            <Col className="cart__empty">
              <img src="/commerce_img/cart/empty.png" alt="empty cart" />
              Your shopping cart is empty
              <Button className="button">Continue Shopping</Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="cart">
      <Container>
        <Row>
          <Col className="cart__title heading">
            Shopping Cart
            <p className="cart__title__items">({items.length})</p>
          </Col>
        </Row>
        <Row className="cart__productsRow">
          <div className="cart__products">
            <Row className="cart__productsRow__headRow">
              <Col className="cart__products__head" xs="1" />
              <Col className="cart__products__head" xs="5">
                Products
              </Col>
              <Col
                className="cart__products__head d-flex justify-content-center"
                xs="3"
              >
                Quantity
              </Col>
              <Col
                className="cart__products__head d-flex justify-content-center"
                xs="3"
              >
                Total
              </Col>
            </Row>
            {items.map((item) => (
              <Row className="cart__productsRow__itemsRow" key={item.name}>
                <Col className="cart__products__delete" xs="1">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="cart__products__delete__button"
                    type="button"
                  >
                    <img
                      className="cart__products__closeIcon"
                      src="/commerce_img/authModal/ic-close.svg"
                      alt="close"
                    />
                  </button>
                </Col>
                <Col className="cart__products__item" xs="5">
                  <img
                    className="cart__products__item__img"
                    src={item.img}
                    alt="item_img"
                  />
                  <div className="cart__products__item__descr">
                    <p className="cart__products__item__descr__name">
                      {item.name}
                    </p>
                    <p className="cart__products__item__descr__color">
                      Color: {item.color}
                    </p>
                    <p className="cart__products__item__descr__dimension">
                      Dimension: {item.dimension}
                    </p>
                  </div>
                </Col>
                <Col className="cart__products__quantity" xs="3">
                  <div className="cart__products__quantity__input">
                    <div className="cart__products__quantity__input__count">
                      {item.quantity}
                    </div>
                    <div className="cart__products__quantity__input__arrows">
                      <button type="button">
                        <img
                          className="cart__products__quantity__input__arrows"
                          src="/commerce_img/cart/arrow-up.svg"
                          alt="arrow_up"
                        />
                      </button>
                      <button type="button">
                        <img
                          className="cart__products__quantity__input__arrows"
                          src="/commerce_img/cart/arrow-down.svg"
                          alt="arrow_down"
                        />
                      </button>
                    </div>
                  </div>
                </Col>
                <Col className="cart__products__price" xs="3">
                  ${item.price}
                </Col>
              </Row>
            ))}
          </div>
          <div className="cart__summary">
            <div className="cart__summary__title">Summary</div>
            <div className="cart__summary__subtotal">
              <p>Subtotal</p>
              <p>$94.14</p>
            </div>
            <div className="cart__summary__shipping">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="divider mb-3" />
            <div className="cart__summary__discount">
              <p className="cart__summary__discount__title">Discount Code</p>
              <Form className="newsLetter__form cart__summary__discount__form">
                <Form.Group controlId="formBasicCoupon">
                  <Form.Control type="text" placeholder="Enter coupon" />
                </Form.Group>
                <Button variant="primary" type="submit" className="button">
                  Apply
                </Button>
              </Form>
            </div>
            <div className="divider mb-3" />
            <div className="cart__summary__total d-flex align-items-center">
              <p>Total</p>
              <p>$94.14</p>
            </div>
            <Button
              type="submit"
              className="button_black cart__summary__checkout"
            >
              Proceed to Checkout
            </Button>
            <div className="cart__summary__pay_icons">
              <img src="/commerce_img/cart/paypal_logo.png" alt="paypal_logo" />
              <img src="/commerce_img/cart/visa_logo.png" alt="visa_logo" />
              <img
                src="/commerce_img/cart/american_logo.png"
                alt="american_logo"
              />
              <img
                src="/commerce_img/cart/mastercard_logo.png"
                alt="mastercard_logo"
              />
            </div>
          </div>
        </Row>
        <Row>
          <Col className="cart__continue">
            <button type="button" onClick={() => router.back()}>
              <img src="/commerce_img/cart/ic-arrow.svg" alt="ic-arrow" />
              Continue Shopping
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
