import { Button, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function Promotions() {
  return (
    <section className="promotions">
      <Container>
        <Row className="heading-div align-items-end">
          <Col xs="6">
            <h1 className="heading">Lorem</h1>
          </Col>
          <Col xs="6" style={{ textAlign: 'right' }}>
            <Link href="/">
              <a className="text promotions__link">Lorem</a>
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center promotions__item">
          <Col md="6" lg="7" className="promotions__item__left">
            <h2 className="promotions__heading">Lorem ipsum</h2>
            <p className="text promotions__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium fugiat quam quo?
              <br />
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text promotions__text">
              <span className="promotions__span">Lorem ipsum dolor:</span> 69
              sit
            </p>
            <Button
              variant="outline-primary"
              size="lg"
              className="button promotions__button"
            >
              Узнать больше &#8594;
            </Button>{' '}
          </Col>
          <Col
            md="6"
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
            className="promotions__item__right"
          >
            <img
              className="promotions__img"
              src="img/promotions1.png"
              alt="promotions1"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
