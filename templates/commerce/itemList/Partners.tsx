import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function Partners() {
  const [icons] = useState([
    { id: 1, src: 'commerce_img/logo.svg' },
    { id: 2, src: 'commerce_img/logo.svg' },
    { id: 3, src: 'commerce_img/logo.svg' },
    { id: 4, src: 'commerce_img/logo.svg' },
    { id: 5, src: 'commerce_img/logo.svg' },
    { id: 6, src: 'commerce_img/logo.svg' },
    { id: 7, src: 'commerce_img/logo.svg' },
    { id: 8, src: 'commerce_img/logo.svg' },
    { id: 9, src: 'commerce_img/logo.svg' },
    { id: 10, src: 'commerce_img/logo.svg' },
  ]);
  return (
    <section className="partners">
      <Container>
        <Row>
          <Col className="partners__icons">
            {icons.map((icon) => (
              <div className="partners__icons__item" key={icon.id}>
                <a href="/">
                  <img src={icon.src} alt="partners_pic" />
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
