import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col xl="1" lg="4" md="5" sm="5" xs="5" className="header__logo">
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
            <Col xl="4" lg="4" md="5" sm="4" xs="4" className="header__links">
              <Link href="/">
                <a className="text">Lorem ipsum dolor</a>
              </Link>
              <Link href="/">
                <a className="text">Lorem ipsum dolor sit amet</a>
              </Link>
            </Col>
            <Col
              xl={{ span: 1, offset: 6 }}
              lg="4"
              md="2"
              sm="3"
              xs="3"
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
            <Col
              xl="9"
              lg="9"
              md="9"
              sm="9"
              xs="9"
              className="header__links__bottom"
            >
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
            </Col>
          </Row>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Container className="footer__container">
          <Row className="footer__top">
            <Col xl="9">
              <Row className="footer__top__header">
                <Col xl="12">
                  <p className="text footer__text">Lorem</p>
                </Col>
              </Row>
              <Row className="footer__top__links">
                <Col xl="12" lg="5" md="7" sm="8" xs="12">
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
            <Col xl={{ span: 3, offset: 0 }}>
              <Row className="footer__phone">
                <Col xl="12">
                  <a className="text footer__text footer__phone_text">
                    +7 999 999-99-99
                  </a>
                </Col>
              </Row>
              <Row className="footer__phone__bottom_text">
                <Col xl="12">
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
