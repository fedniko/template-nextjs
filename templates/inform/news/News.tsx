import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Slider from 'react-slick';

export default function News() {
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
    <section className="news">
      <Container>
        <Row className="heading-div align-items-end">
          <Col xs="6">
            <h1 className="heading">Lorem</h1>
          </Col>
          <Col xs="6" style={{ textAlign: 'right' }}>
            <Link href="/">
              <a className="text news__link">Lorem ipsum</a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider {...settings}>
              <>
                <div className="news__carousel__item">
                  <div className="news__carousel__image">
                    <img
                      className="news__carousel__image_item"
                      src="img/news1.png"
                      alt="news1"
                    />
                  </div>
                  <div className="news__carousel__body">
                    <div className="news__carousel__headers">
                      <h5 className="news__carousel__h5">Lorem ipsum</h5>
                      <h5 className="news__carousel__date">Июнь 18, 2021</h5>
                    </div>
                    <h2 className="news__carousel__heading">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text news__carousel__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur deleniti doloribus eaque hic
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="news__carousel__item">
                  <div className="news__carousel__image">
                    <img
                      className="news__carousel__image_item"
                      src="img/news2.png"
                      alt="news2"
                    />
                  </div>
                  <div className="news__carousel__body">
                    <div className="news__carousel__headers">
                      <h5 className="news__carousel__h5">Lorem ipsum</h5>
                      <h5 className="news__carousel__date">Июнь 18, 2021</h5>
                    </div>
                    <h2 className="news__carousel__heading">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text news__carousel__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur deleniti doloribus eaque hic
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="news__carousel__item">
                  <div className="news__carousel__image">
                    <img
                      className="news__carousel__image_item"
                      src="img/news3.png"
                      alt="news3"
                    />
                  </div>
                  <div className="news__carousel__body">
                    <div className="news__carousel__headers">
                      <h5 className="news__carousel__h5">Lorem ipsum</h5>
                      <h5 className="news__carousel__date">Июнь 18, 2021</h5>
                    </div>
                    <h2 className="news__carousel__heading">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text news__carousel__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur deleniti doloribus eaque hic
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="news__carousel__item">
                  <div className="news__carousel__image">
                    <img
                      className="news__carousel__image_item"
                      src="img/news4.png"
                      alt="news4"
                    />
                  </div>
                  <div className="news__carousel__body">
                    <div className="news__carousel__headers">
                      <h5 className="news__carousel__h5">Lorem ipsum</h5>
                      <h5 className="news__carousel__date">Июнь 18, 2021</h5>
                    </div>
                    <h2 className="news__carousel__heading">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text news__carousel__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur deleniti doloribus eaque hic
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="news__carousel__item">
                  <div className="news__carousel__image">
                    <img
                      className="news__carousel__image_item"
                      src="img/news1.png"
                      alt="news1"
                    />
                  </div>
                  <div className="news__carousel__body">
                    <div className="news__carousel__headers">
                      <h5 className="news__carousel__h5">Lorem ipsum</h5>
                      <h5 className="news__carousel__date">Июнь 18, 2021</h5>
                    </div>
                    <h2 className="news__carousel__heading">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text news__carousel__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur deleniti doloribus eaque hic
                    </p>
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
