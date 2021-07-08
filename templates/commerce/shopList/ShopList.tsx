import { Button, Col, Container, Pagination, Row, Form } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';
import ShopFilter from '../shopFilter/ShopFilter';

export default function ShopList() {
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
    {
      id: 9,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item1.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 10,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item2.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 11,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item3.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 12,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 13,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 14,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 15,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 16,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item8.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 17,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 18,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 19,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 20,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
  ]);

  return (
    <section className="shopList">
      <Container>
        <Row>
          <Col xs="3">
            <ShopFilter />
          </Col>
          <Col xs="9">
            <Row className="shopList__right__top">
              <Col className="shopList__select">
                <Form.Group className="shopList__select__group">
                  <Form.Label>Show</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    defaultValue="2"
                  >
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="shopList__select__group">
                  <Form.Label>Sort by</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    defaultValue="1"
                  >
                    <option value="1">Price Low to High</option>
                    <option value="2">Price High to Low</option>
                    <option value="3">Rating High to Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="shopList__icons">
                <Link href="/">
                  <a>
                    <img
                      className=""
                      src="/commerce_img/shoplist_squares.svg"
                      alt="hearth"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img
                      className=""
                      src="/commerce_img/shoplist_list.svg"
                      alt="hearth"
                    />
                  </a>
                </Link>
              </Col>
            </Row>
            <Row>
              {products.map((p) => (
                <Col xs="6" md="4" xl="3" key={p.id * 13}>
                  <div className="itemList__item">
                    <div className="itemList__image">
                      <Link href="/product-page">
                        <img
                          className="itemList__image_item"
                          src={p.picture}
                          alt="news3"
                        />
                      </Link>
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
                      <Link href="/product-page">
                        <a className="itemList__heading">
                          <p>{p.name}</p>
                        </a>
                      </Link>
                      <p className="text itemList__price">${p.price}</p>
                    </div>
                    <Button variant="link">Add to Cart</Button>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <Pagination className="productReview__reviewBlock__main__reviews__pagination">
                  <Pagination.Prev>Pre</Pagination.Prev>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
