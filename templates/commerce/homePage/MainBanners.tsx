import { Col, Container, Row, Button } from 'react-bootstrap';

export default function MainBanners() {
  return (
    <section className="mainBanners">
      <Container>
        <Row>
          <Col xs="6">
            <div className="mainBanners__item">
              <p className="mainBanners__item__subheading">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                2020's NEW COLLECTION
              </p>
              <h2 className="mainBanners__item__heading">Comfortable Chair</h2>
              <Button variant="primary" type="button" className="button">
                Explore Now
              </Button>
            </div>
          </Col>
          <Col xs="6">
            <div className="mainBanners__item second">
              <p className="mainBanners__item__subheading">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                2020's NEW COLLECTION
              </p>
              <h2 className="mainBanners__item__heading">Vega Table Lamp</h2>
              <Button variant="primary" type="button" className="button">
                Explore Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
