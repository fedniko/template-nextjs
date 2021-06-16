import { Col, Container, Row } from 'react-bootstrap';

export default function Partners() {
  return (
    <section className="partners">
      <Container>
        <Row>
          <Col className="partners__top">
            <h1 className="text partners__heading">Lorem ipsum</h1>
            <p className="text partners__text">Lorem ipsum</p>
          </Col>
        </Row>
        <Row>
          <Col xl={{ span: 8, offset: 2 }} className="partners__icons__top">
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners1.png" alt="partners1" />
              </a>
            </div>
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners2.png" alt="partners2" />
              </a>
            </div>
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners3.png" alt="partners3" />
              </a>
            </div>
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners4.png" alt="partners4" />
              </a>
            </div>
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners5.png" alt="partners5" />
              </a>
            </div>
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners6.png" alt="partners6" />
              </a>
            </div>
            <div className="partners__icons__item">
              <a href="/">
                <img src="img/partners7.png" alt="partners7" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
