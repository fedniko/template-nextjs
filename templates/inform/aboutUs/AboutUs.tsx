import { Col, Container, Row } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <section className="aboutUs">
      <Container>
        <Row>
          <Col xl="7" lg="7" md="7" sm="7" xs="7" className="aboutUs__left">
            <h1 className="text aboutUs__heading">Lorem ipsum dolor sit?</h1>
            <p className="text aboutUs__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fuga
              magnam minima quaerat vero. Amet dolor ducimus eum fugit
              laudantium nam nobis possimus suscipit voluptate voluptatibus.{' '}
              <a className="aboutUs__link" href="https://aeb-it.ru/">
                Autem earum
              </a>{' '}
              exercitationem facere mollitia omnis, quasi reprehenderit?
              Consectetur, perspiciatis!
            </p>
          </Col>
          <Col
            xl={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            md={{ span: 4, offset: 1 }}
            sm={{ span: 4, offset: 1 }}
            xs={{ span: 4, offset: 1 }}
            className="aboutUs__right"
          >
            <div className="aboutUs__right__item">
              <img
                className="aboutUs__img"
                src="img/aboutUs1.svg"
                alt="aboutUs1"
              />
              <p className="text aboutUs__text_small">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="aboutUs__right__item">
              <img
                className="aboutUs__img"
                src="img/aboutUs2.svg"
                alt="aboutUs2"
              />
              <p className="text aboutUs__text_small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, delectus enim!
              </p>
            </div>
            <div className="aboutUs__right__item">
              <img
                className="aboutUs__img"
                src="img/aboutUs3.svg"
                alt="aboutUs3"
              />
              <p className="text aboutUs__text_small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                natus!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
