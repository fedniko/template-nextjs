import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Slider from 'react-slick';

export default function Services() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    waitForAnimate: false,
    touchThreshold: 15,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          fade: true,
          arrows: false,
          dots: true,
          speed: 800,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className="services">
      <Container>
        <Row className="heading-div align-items-end">
          <Col xs="6">
            <h1 className="heading">Lorem ipsum dolor</h1>
          </Col>
          <Col xs="6" style={{ textAlign: 'right' }}>
            <Link href="/">
              <a className="text services__link">Lorem ipsum dolor</a>
            </Link>
          </Col>
        </Row>
        <Row className="services__carousel">
          <Col>
            <Slider {...settings}>
              <>
                <div className="services__carousel__item">
                  <div className="services__carousel__body">
                    <h5 className="services__carousel__h5">
                      Lorem ipsum dolor.
                    </h5>
                    <h2 className="services__carousel__heading">Lorem</h2>
                    <p className="text services__carousel__text main">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">Lorem:</span>{' '}
                      69 lorem
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">
                        Lorem impsum:
                      </span>{' '}
                      69 000₽ - 69 000₽
                    </p>
                  </div>
                  <div className="services__carousel__image">
                    <img
                      className="services__carousel__image_item"
                      src="img/services1.png"
                      alt="services1"
                    />
                  </div>
                </div>
              </>
              <>
                <div className="services__carousel__item second">
                  <div className="services__carousel__body">
                    <h5 className="services__carousel__h5">
                      Lorem ipsum dolor.
                    </h5>
                    <h2 className="services__carousel__heading">Lorem</h2>
                    <p className="text services__carousel__text main">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">Lorem:</span>{' '}
                      69 lorem
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">
                        Lorem impsum:
                      </span>{' '}
                      69 000₽ - 69 000₽
                    </p>
                  </div>
                  <div className="services__carousel__image">
                    <img
                      className="services__carousel__image_item"
                      src="img/services2.png"
                      alt="services2"
                    />
                  </div>
                </div>
              </>
              <>
                <div className="services__carousel__item third">
                  <div className="services__carousel__body">
                    <h5 className="services__carousel__h5">
                      Lorem ipsum dolor.
                    </h5>
                    <h2 className="services__carousel__heading">Lorem</h2>
                    <p className="text services__carousel__text main">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">Lorem:</span>{' '}
                      69 lorem
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">
                        Lorem impsum:
                      </span>{' '}
                      69 000₽ - 69 000₽
                    </p>
                  </div>
                  <div className="services__carousel__image">
                    <img
                      className="services__carousel__image_item"
                      src="img/services3.png"
                      alt="services3"
                    />
                  </div>
                </div>
              </>
              <>
                <div className="services__carousel__item fourth">
                  <div className="services__carousel__body">
                    <h5 className="services__carousel__h5">
                      Lorem ipsum dolor.
                    </h5>
                    <h2 className="services__carousel__heading">Lorem</h2>
                    <p className="text services__carousel__text main">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">Lorem:</span>{' '}
                      69 lorem
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">
                        Lorem impsum:
                      </span>{' '}
                      69 000₽ - 69 000₽
                    </p>
                  </div>
                  <div className="services__carousel__image">
                    <img
                      className="services__carousel__image_item"
                      src="img/services4.png"
                      alt="services4"
                    />
                  </div>
                </div>
              </>
              <>
                <div className="services__carousel__item">
                  <div className="services__carousel__body">
                    <h5 className="services__carousel__h5">
                      Lorem ipsum dolor.
                    </h5>
                    <h2 className="services__carousel__heading">Lorem</h2>
                    <p className="text services__carousel__text main">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">Lorem:</span>{' '}
                      69 lorem
                    </p>
                    <p className="text services__carousel__text">
                      <span className="services__carousel__span">
                        Lorem impsum:
                      </span>{' '}
                      69 000₽ - 69 000₽
                    </p>
                  </div>
                  <div className="services__carousel__image">
                    <img
                      className="services__carousel__image_item"
                      src="img/services1.png"
                      alt="services1"
                    />
                  </div>
                </div>
              </>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
