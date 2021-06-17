import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

export default function MainCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    waitForAnimate: false,
    touchThreshold: 60,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          fade: true,
        },
      },
    ],
  };
  return (
    <section className="main__carousel">
      <Slider {...settings}>
        <>
          <Container className="main__carousel__container">
            <Row className="align-items-center">
              <Col
                xl={{ span: 6 }}
                lg={{ span: 7 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
              >
                <h2 className="main__carousel__heading">
                  Lorem ipsum dolor sit
                </h2>
                <p className="text main__carousel__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
                  <span className="text main__carousel__span">69%</span> elit.
                  Accusantium fugiat quam quo? Lorem ipsum dolor sit amet,
                  consectetur
                </p>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="text main__carousel__button"
                >
                  Подробнее
                </Button>{' '}
              </Col>
              <Col xl={{ span: 4, offset: 1 }} lg="5" md="6" sm={{ span: 12 }}>
                <img
                  className="main__carousel__img"
                  src="img/topSlider1.png"
                  alt="doctor"
                />
              </Col>
            </Row>
          </Container>
        </>
        <>
          <Container className="main__carousel__container">
            <Row className="align-items-center">
              <Col
                xl={{ span: 6 }}
                lg={{ span: 7 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
              >
                <h2 className="main__carousel__heading">
                  Lorem ipsum dolor sit
                </h2>
                <p className="text main__carousel__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
                  <span className="text main__carousel__span">69%</span> elit.
                  Accusantium fugiat quam quo? Lorem ipsum dolor sit amet,
                  consectetur
                </p>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="text main__carousel__button"
                >
                  Подробнее
                </Button>{' '}
              </Col>
              <Col xl={{ span: 4, offset: 1 }} lg="5" md="6" sm={{ span: 12 }}>
                <img
                  className="main__carousel__img"
                  src="img/topSlider1.png"
                  alt="doctor"
                />
              </Col>
            </Row>
          </Container>
        </>
        <>
          <Container className="main__carousel__container">
            <Row className="align-items-center">
              <Col
                xl={{ span: 6 }}
                lg={{ span: 7 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
              >
                <h2 className="main__carousel__heading">
                  Lorem ipsum dolor sit
                </h2>
                <p className="text main__carousel__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
                  <span className="text main__carousel__span">69%</span> elit.
                  Accusantium fugiat quam quo? Lorem ipsum dolor sit amet,
                  consectetur
                </p>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="text main__carousel__button"
                >
                  Подробнее
                </Button>{' '}
              </Col>
              <Col xl={{ span: 4, offset: 1 }} lg="5" md="6" sm={{ span: 12 }}>
                <img
                  className="main__carousel__img"
                  src="img/topSlider1.png"
                  alt="doctor"
                />
              </Col>
            </Row>
          </Container>
        </>
        <>
          <Container className="main__carousel__container">
            <Row className="align-items-center">
              <Col
                xl={{ span: 6 }}
                lg={{ span: 7 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
              >
                <h2 className="main__carousel__heading">
                  Lorem ipsum dolor sit
                </h2>
                <p className="text main__carousel__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
                  <span className="text main__carousel__span">69%</span> elit.
                  Accusantium fugiat quam quo? Lorem ipsum dolor sit amet,
                  consectetur
                </p>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="text main__carousel__button"
                >
                  Подробнее
                </Button>{' '}
              </Col>
              <Col xl={{ span: 4, offset: 1 }} lg="5" md="6" sm={{ span: 12 }}>
                <img
                  className="main__carousel__img"
                  src="img/topSlider1.png"
                  alt="doctor"
                />
              </Col>
            </Row>
          </Container>
        </>
      </Slider>
    </section>
  );
}
