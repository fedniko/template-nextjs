import { Col, Container, Row } from 'react-bootstrap';

export default function AboutPartners() {
  return (
    <section className="aboutPartners">
      <Container>
        <Row>
          <Col className="aboutPartners__col">
            <img src="/commerce_img/aboutUs/partner1.png" alt="partner1" />
            <img src="/commerce_img/aboutUs/partner2.png" alt="partner2" />
            <img src="/commerce_img/aboutUs/partner3.png" alt="partner3" />
            <img src="/commerce_img/aboutUs/partner4.png" alt="partner4" />
            <img src="/commerce_img/aboutUs/partner5.png" alt="partner5" />
            <img src="/commerce_img/aboutUs/partner6.png" alt="partner6" />
            <img src="/commerce_img/aboutUs/partner7.png" alt="partner7" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
