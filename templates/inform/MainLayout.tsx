import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col xl="1" lg="1" md="2" sm="3" xs="3" className="header__logo">
              <Link href="/">
                <a>
                  <img
                    className="header__logo_img"
                    src="/img/vercel.svg"
                    alt="logo"
                  />
                </a>
              </Link>
            </Col>
            <Col xl="4" lg="5" md="6" sm="8" xs="8" className="header__links">
              <Link href="/">
                <a className="text">Lorem ipsum dolor</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum dolor sit amet</a>
              </Link>
            </Col>
            <Col
              xl={{ span: 1, offset: 6 }}
              lg={{ span: 1, offset: 5 }}
              md={{ span: 1, offset: 3 }}
              sm={{ span: 1, offset: 0 }}
              xs={{ span: 1, offset: 0 }}
              className="header__search"
            >
              <Link href="/">
                <a className="text header__text">
                  <img
                    className="header__user__img"
                    src="/img/search.svg"
                    alt="user"
                    width="20px"
                    height="20px"
                  />
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="header__top" />
        <Container>
          <Row>
            <div className="header__links__bottom">
              <Link href="/">
                <a className="text">Lorem ipsum</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem</a>
              </Link>
            </div>
          </Row>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Container className="footer__container">
          <Row className="footer__top">
            <Col xl="8" lg="8" md="8" sm="12" xs="12">
              <Row className="footer__top__header">
                <Col xl="12">
                  <p className="text footer__text">Lorem</p>
                </Col>
              </Row>
              <Row className="footer__top__links">
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                  <div className="footer__links">
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Lorem ipsum</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" xs="12">
              <Row className="footer__phone">
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                  <a className="text footer__text footer__phone_text">
                    +7 999 999-99-99
                  </a>
                </Col>
              </Row>
              <Row className="footer__phone__bottom_text">
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                  <p className="text footer__text">Ежедневно с 9:00 до 17:00</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
