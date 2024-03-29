import Link from 'next/link';
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
  Modal,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../redux/types';
import API from '../../components/api';

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

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [inputType, setInputType] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleSignUpClose = () => setShowSignUp(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleSignUpShow = () => setShowSignUp(true);

  const dispatch = useDispatch();
  const userState = useSelector((state: IRootState) => state.user);

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<any>({});

  const clearInputs = () => {
    setErrors({});
    setCredentials({ name: '', email: '', password: '' });
  };

  function loginRequest() {
    setErrors({});
    API.post('auth/login', credentials)
      .then(({ data }) => {
        dispatch({ type: 'LOG_IN', ...data });
        handleLoginClose();
      })
      .catch((error) => {
        console.log('error: ', error);
        setErrors(error?.response.data.errors);
        console.error('loginRequest:', error);
      });
  }

  function registerRequest() {
    setErrors({});
    API.post('auth/register', credentials)
      .then(() => {
        handleSignUpClose();
        handleLoginShow();
      })
      .catch((error) => {
        setErrors(error?.response.data.errors);
        console.error('registerRequest:', error);
      });
  }

  const addToCartReducers = useSelector((state: IRootState) => state.cart);

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
              <Link href="/wishlist">
                <a className="text header__text">
                  <img src="/commerce_img/hearth.svg" alt="hearth" />
                </a>
              </Link>
              <Link href="/cart">
                <a className="text header__text">
                  <img src="/commerce_img/cart.svg" alt="cart" />
                  <span>{addToCartReducers?.length}</span>
                </a>
              </Link>
              <a
                className="text header__text"
                onClick={() => handleLoginShow()}
              >
                <img
                  className="header__icon"
                  src="/commerce_img/signin.svg"
                  alt="signIn"
                />
                {userState.isLogged ? userState.userName : 'Sign In'}
              </a>
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
                <Link href="/shop">
                  <a className="nav-link text">Shop</a>
                </Link>
                <Link href="/blog">
                  <a className="nav-link text">Blog</a>
                </Link>
                <Link href="/about-us">
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
                    <Link href="/contact">
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
                    <Link href="/faq">
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
      <Modal
        show={showLogin}
        onHide={handleLoginClose}
        onExited={clearInputs}
        className="authModal"
        centered
      >
        <Modal.Body>
          <button
            className="authModal__close"
            type="button"
            onClick={() => handleLoginClose()}
          >
            <img src="/commerce_img/authModal/ic-close.svg" alt="close modal" />
          </button>

          <Row>
            <Col md="6" xs="12" className="authModal__left d-none d-sm-block">
              <img src="./commerce_img/authModal/bg.png" alt="background" />
            </Col>
            <Col md="6" xs="12" className="authModal__right">
              <img
                className="authModal__right__logo"
                src="/commerce_img/logo.svg"
                alt="logo"
              />
              <p className="authModal__right__heading">Welcome back</p>
              <div className="authModal__right__signInButtons">
                <button
                  className="authModal__right__signInButtons__facebook"
                  type="button"
                >
                  <img
                    src="/commerce_img/authModal/ic-facebook.svg"
                    alt="facebook"
                  />
                  Sign in with Facebook
                </button>
                <button
                  className="authModal__right__signInButtons__google"
                  type="button"
                >
                  <img
                    src="/commerce_img/authModal/ic-google.svg"
                    alt="google"
                  />
                </button>
              </div>
              <div className="authModal__right__dividers">
                <div className="authModal__right__dividers__divider" />
                Or
                <div className="authModal__right__dividers__divider" />
              </div>
              <div className="authModal__right__form">
                <Form.Group
                  className="authModal__right__form__email reviewForm"
                  controlId="formLoginEmail"
                >
                  <Form.Label>Your email</Form.Label>
                  <Form.Control
                    type="email"
                    value={credentials.email}
                    placeholder="ex: julie@gmail.com"
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        email: e.target.value,
                      })
                    }
                    isInvalid={errors.email?.length > 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email !== undefined && errors.email[0]}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="authModal__right__form__password reviewForm"
                  controlId="formPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={inputType ? 'input' : 'password'}
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    isInvalid={errors.password?.length > 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password !== undefined && errors.password[0]}
                  </Form.Control.Feedback>
                  <button
                    type="button"
                    onClick={() => setInputType(!inputType)}
                  >
                    <img
                      src={
                        inputType
                          ? '/commerce_img/authModal/ic-eye_on.svg'
                          : '/commerce_img/authModal/ic-eye_off.svg'
                      }
                      alt="hide password"
                    />
                  </button>
                </Form.Group>
                <Button
                  className="authModal__right__form__submit"
                  variant="primary"
                  size="lg"
                  onClick={() => loginRequest()}
                >
                  Sign In
                </Button>
                <div className="authModal__right__form__bottom">
                  New member?
                  <a
                    onClick={() => {
                      handleLoginClose();
                      handleSignUpShow();
                    }}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal
        show={showSignUp}
        onHide={handleSignUpClose}
        onExited={clearInputs}
        className="authModal"
        centered
      >
        <Modal.Body>
          <button
            className="authModal__close"
            type="button"
            onClick={() => handleSignUpClose()}
          >
            <img src="/commerce_img/authModal/ic-close.svg" alt="close modal" />
          </button>

          <Row>
            <Col md="6" xs="12" className="authModal__left d-none d-sm-block">
              <img
                src="./commerce_img/authModal/signUpBg.png"
                alt="background"
              />
            </Col>
            <Col md="6" xs="12" className="authModal__right">
              <img
                className="authModal__right__logo"
                src="/commerce_img/logo.svg"
                alt="logo"
              />
              <p className="authModal__right__heading">Hello, friend!!!</p>
              <div className="authModal__right__signInButtons">
                <button
                  className="authModal__right__signInButtons__facebook"
                  type="button"
                >
                  <img
                    src="/commerce_img/authModal/ic-facebook.svg"
                    alt="facebook"
                  />
                  Sign in with Facebook
                </button>
                <button
                  className="authModal__right__signInButtons__google"
                  type="button"
                >
                  <img
                    src="/commerce_img/authModal/ic-google.svg"
                    alt="google"
                  />
                </button>
              </div>
              <div className="authModal__right__dividers">
                <div className="authModal__right__dividers__divider" />
                Or
                <div className="authModal__right__dividers__divider" />
              </div>
              <div className="authModal__right__form">
                <Form.Group
                  className="authModal__right__form__username reviewForm"
                  controlId="formUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ex: Julie"
                    value={credentials.name}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        name: e.target.value,
                      })
                    }
                    isInvalid={errors.name?.length > 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name !== undefined && errors.name[0]}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="authModal__right__form__email reviewForm"
                  controlId="formRegisterEmail"
                >
                  <Form.Label>Your email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ex: julie@gmail.com"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        email: e.target.value,
                      })
                    }
                    isInvalid={errors.email?.length > 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email !== undefined && errors.email[0]}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="authModal__right__form__password reviewForm"
                  controlId="formPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={inputType ? 'input' : 'password'}
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    isInvalid={errors.password?.length > 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password !== undefined && errors.password[0]}
                  </Form.Control.Feedback>
                  <button
                    type="button"
                    onClick={() => setInputType(!inputType)}
                  >
                    <img
                      src={
                        inputType
                          ? '/commerce_img/authModal/ic-eye_on.svg'
                          : '/commerce_img/authModal/ic-eye_off.svg'
                      }
                      alt="hide password"
                    />
                  </button>
                </Form.Group>
                <Form.Group
                  className="authModal__right__form__checkbox"
                  controlId="formCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="By submitting this form you agree to our Terms and 
Conditions"
                  />
                </Form.Group>
                <Button
                  className="authModal__right__form__submit"
                  variant="primary"
                  size="lg"
                  onClick={() => registerRequest()}
                >
                  Create Account
                </Button>
                <div className="authModal__right__form__bottom">
                  Already a member?
                  <a
                    onClick={() => {
                      handleSignUpClose();
                      handleLoginShow();
                    }}
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
