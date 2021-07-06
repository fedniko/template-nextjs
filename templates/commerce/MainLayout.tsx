import Link from 'next/link';
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  NavDropdown,
} from 'react-bootstrap';
import { useEffect } from 'react';

export default function MainLayout({ children }: { children: any }) {
  useEffect(() => {
    window.onscroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const headerTop = document.getElementById('headerTop');

      if (headerTop != null) {
        if (scrolled > 50) {
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
            <Col xs="12" sm="9" md="10" lg="8" className="header__top__links">
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
              <Form className="d-flex header__search__form">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <img src="/commerce_img/search.svg" alt="search" />
                </button>
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
                <Link href="/blog">
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
        <div className="footer__middle">
          <Container className="footer__middle__container">
            <Row>
              <Col md="4" className="footer__logo">
                <Link href="/">
                  <a>
                    <img
                      className="footer__logo_img"
                      src="/commerce_img/logo_light.svg"
                      alt="logo"
                    />
                  </a>
                </Link>
                <p className="text footer__text footer__logo__text">
                  Address: 17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
                <p className="text footer__text footer__logo__text">
                  Phone: (800) 8001-8588, (0600) 874 548
                </p>
                <p className="text footer__text footer__logo__text">
                  Email: info@gmail.com
                </p>
                <div className="footer__icons">
                  <Link href="/">
                    <a>
                      <img
                        className="footer__logo_img"
                        src="/commerce_img/ic-facebook.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className="footer__logo_img"
                        src="/commerce_img/ic-google.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className="footer__logo_img"
                        src="/commerce_img/ic-instagram.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className="footer__logo_img"
                        src="/commerce_img/ic-twitter.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }} className="footer__middle_mid">
                <h2 className="text footer__heading">Company</h2>
                <div className="footer__middle__links">
                  <div className="footer__middle__links__item">
                    <Link href="/">
                      <a className="text footer__text">About us</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Shop</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Features</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Sale</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Contact</a>
                    </Link>
                  </div>
                  <div className="footer__middle__links__item">
                    <Link href="/">
                      <a className="text footer__text">Shipping</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Help</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">Privacy Policy</a>
                    </Link>
                    <Link href="/">
                      <a className="text footer__text">FAQs</a>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 4, offset: 1 }} className="footer__middle__last">
                <h2 className="text footer__heading">Newsletter</h2>
                <p className="text footer__text footer__logo__text">
                  Sign up for our Newsletter to get more events, promotions &
                  news from us!
                </p>
                <div className="footer__input">
                  <Form className="footer__input__form">
                    <input type="text" placeholder="Enter your email" />
                    <button type="submit">
                      <img src="/commerce_img/footer_button.svg" alt="search" />
                    </button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="footer__bottom__container">
            <Row>
              <Col xs="6">
                <p className="text footer__text">
                  Copyright © All rights Reserved
                </p>
              </Col>
              <Col
                xs="6"
                md={{ span: 4, offset: 2 }}
                lg={{ span: 3, offset: 3 }}
                xl={{ span: 2, offset: 4 }}
              >
                <div className="footer__bottom__icons">
                  <Link href="/">
                    <a>
                      <img
                        className=""
                        src="/commerce_img/Visa.png"
                        alt="logo"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className=""
                        src="/commerce_img/MasterCard.png"
                        alt="logo"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className=""
                        src="/commerce_img/PayPal.png"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
