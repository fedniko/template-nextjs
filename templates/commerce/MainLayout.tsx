import Link from 'next/link';
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { useEffect } from 'react';

export default function MainLayout({ children }: { children: any }) {
  useEffect(() => {
    window.onscroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const headerTop = document.getElementById('headerTop');

      if (headerTop != null) {
        if (scrolled > 150) {
          headerTop.style.display = 'none';
        } else {
          headerTop.style.display = 'flex';
        }
      }
    };
  });
  return (
    <>
      <header className="header">
        <Container>
          <Row className="header__top" id="headerTop">
            <Col
              xs="12"
              sm="9"
              md="10"
              lg="8"
              xl="6"
              className="header__top__links"
            >
              <Link href="/">
                <a className="text header__text">
                  <img
                    className="header__icon"
                    src="/commerce_img/plane.svg"
                    alt="hearth"
                  />
                  Free delivery over $200
                </a>
              </Link>
              <Link href="/">
                <a className="text header__text">
                  <img
                    className="header__icon"
                    src="/commerce_img/coin.svg"
                    alt="cart"
                  />
                  Money back guarantee
                </a>
              </Link>
              <Link href="/">
                <a className="text header__text">
                  <img
                    className="header__icon"
                    src="/commerce_img/tag.svg"
                    alt="signIn"
                  />
                  Weekly new arrivals
                </a>
              </Link>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 2, offset: 1 }}
              md={{ span: 2, offset: 0 }}
              lg={{ span: 2, offset: 2 }}
              xl={{ span: 2, offset: 4 }}
              className="header__dropdown"
            >
              <NavDropdown title="ENG" id="basic-nav-dropdown">
                <NavDropdown.Item href="#!">RUS</NavDropdown.Item>
                <NavDropdown.Item href="#!">YKT</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="USD" id="basic-nav-dropdown2">
                <NavDropdown.Item href="#action/3.1">EURO</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">RUB</NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
          <Row>
            <Col xs="4" sm="6" md="4" className="header__logo">
              <Link href="/">
                <a>
                  <img
                    className="header__logo_img"
                    src="/commerce_img/logo.svg"
                    alt="logo"
                  />
                </a>
              </Link>
            </Col>
            <Col
              xs="8"
              sm={{ span: 6, offset: 0 }}
              md="4"
              className="header__search"
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Col>
            <Col
              xs="12"
              sm={{ span: 6, offset: 6 }}
              md={{ span: 4, offset: 0 }}
              lg={{ span: 3, offset: 1 }}
              className="header__links"
            >
              <Link href="/">
                <a className="text header__text">
                  <img src="/commerce_img/hearth.svg" alt="hearth" />
                </a>
              </Link>
              <Link href="/">
                <a className="text header__text">
                  <img src="/commerce_img/cart.svg" alt="cart" />
                </a>
              </Link>
              <Link href="/">
                <a className="text header__text">
                  <img
                    className="header__icon"
                    src="/commerce_img/signin.svg"
                    alt="signIn"
                  />
                  Sign in
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="header__border" />
        <Container>
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link href="/">
                  <a className="nav-link active text">Home</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Shop</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">Blog</a>
                </Link>
                <Link href="/">
                  <a className="nav-link text">About us</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Text>
              <p className="text header__navbar_text">
                Extra 20% off save items + Free shipping for orders over $200
              </p>
            </Navbar.Text>
          </Navbar>
        </Container>
      </header>
      <div className="header_size" />
      <main>{children}</main>
      <footer className="footer">
        <Container className="footer__container">
          <Row className="footer__top">
            <Col xl="8" lg="8" md="8" sm="12" xs="12">
              <Row className="footer__top__header">
                <Col>
                  <p className="text footer__text">Lorem</p>
                </Col>
              </Row>
              <Row className="footer__top__links">
                <Col>
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
                <Col>
                  <a
                    className="text footer__text footer__phone_text"
                    href="tel:+79999999999"
                  >
                    +7 999 999-99-99
                  </a>
                </Col>
              </Row>
              <Row className="footer__phone__bottom_text">
                <Col>
                  <p className="text footer__text">Lorem ipsum dolor sit</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="footer__middle">
          <Container className="footer__middle__container">
            <Row>
              <Col
                xl="7"
                lg="8"
                md="9"
                sm="12"
                xs="12"
                className="footer__middle__links"
              >
                <div className="footer__middle__links__item">
                  <h2 className="text footer__text">Lorem ipsum dolor</h2>
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
                <div className="footer__middle__links__item">
                  <h2 className="text footer__text">Lorem ipsum dolor</h2>
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
                <div className="footer__middle__links__item">
                  <h2 className="text footer__text">Lorem</h2>
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
                  <Link href="/">
                    <a className="text footer__text">Lorem ipsum</a>
                  </Link>
                </div>
              </Col>
              <Col
                xl={{ span: 4, offset: 1 }}
                lg={{ span: 4, offset: 0 }}
                md={{ span: 3, offset: 0 }}
                sm="12"
                xs="12"
              >
                <p className="text footer__text footer__middle__last">
                  Lorem ipsum dolor sit amet
                  <br /> Lorem ipsum
                  <br /> Lorem ipsum
                  <br /> Lorem ipsum dolor sit amet, consectetur
                  <br /> Тел.: 8(800)000-00-00
                  <br /> Email: example@mail.ru
                  <br /> Адрес: г. Москва, ул. Большая, 1
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="footer__bottom__container">
            <Row>
              <Col>
                <p className="text footer__text">
                  © 2016-2021 АЭБ АйТи. Все права защищены.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
