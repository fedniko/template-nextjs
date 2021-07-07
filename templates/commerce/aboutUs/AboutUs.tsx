import { Col, Container, Row } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <section className="aboutUs">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" xs="12" className="aboutUs__img">
            <img
              className="img-fluid"
              src="/commerce_img/aboutUs/img1.png"
              alt="img1"
            />
          </Col>
          <Col lg="6" xs="12" className="aboutUs__main">
            <div className="aboutUs__main__title">ABOUT US</div>
            <div className="aboutUs__main__heading">
              Just Stay Home & Enjoy <br /> Your Shopping Time
            </div>
            <div className="aboutUs__main__descr">
              <p>
                The Expression Agenda is our global human rights strategy.
                Through it, we target the best means of protecting rights and
                freedoms on the ground, while enhancing international
                instruments that protect freedom of expression and the right to
                information around the world.
              </p>
              <p>
                Our annual report on the state of freedom of expression tracks
                global trends across major issues of freedom of expression and
                information, and how they are experienced in various countries.
              </p>
            </div>
            <div className="aboutUs__main__features">
              <div className="aboutUs__main__features__delivery">
                <img src="/commerce_img/aboutUs/ic-plane.svg" alt="ic-plane" />
                <div>
                  <p>Free World Delivery</p>
                  <p>Orders over $200</p>
                </div>
              </div>
              <div className="aboutUs__main__features__moneyback">
                <img src="/commerce_img/aboutUs/ic-coin.svg" alt="ic-coin" />
                <div>
                  <p>Money Back Guarantee</p>
                  <p>Within 30 days</p>
                </div>
              </div>
              <div className="aboutUs__main__features__support">
                <img src="/commerce_img/aboutUs/ic-phone.svg" alt="ic-phone" />
                <div>
                  <p>Online Support</p>
                  <p>Free support system 24/7</p>
                </div>
              </div>
              <div className="aboutUs__main__features__gift">
                <img src="/commerce_img/aboutUs/ic-gift.svg" alt="ic-gift" />
                <div>
                  <p>Member Gift</p>
                  <p>Coupon at weekend</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
