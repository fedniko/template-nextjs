import { Col, Container, Row, Button, Form } from 'react-bootstrap';

export default function ContactMain() {
  return (
    <section className="contactMain">
      <Container>
        <Row className="heading-div">
          <Col>
            <h1 className="heading contactMain__heading">Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="7">
            <p className="text contactMain__subheading">
              We love to hear from you, so if there’s anything you’d like to ask
              us, we’re right here and ready to help in every way we can.
            </p>
            <Form className="contactMain__form">
              <Form.Group
                controlId="ControlTextInput1"
                className="contactMain__form__group"
              >
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="ex: Julie Sample" />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                className="contactMain__form__group"
              >
                <Form.Label>Your email</Form.Label>
                <Form.Control type="email" placeholder="ex: julie@gmail.com" />
              </Form.Group>
              <Form.Group
                controlId="ControlPhoneInput"
                className="contactMain__form__group"
              >
                <Form.Label>Your phone</Form.Label>
                <Form.Control type="phone" placeholder="ex: +1 234 455 5564" />
              </Form.Group>
              <Form.Group
                controlId="ControlTextInput2"
                className="contactMain__form__group"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="ex: return" />
              </Form.Group>
              <Form.Group
                controlId="ControlTextarea1"
                className="contactMain__form__textarea"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message here."
                />
              </Form.Group>
              <div className="contactMain__form__button">
                <Button variant="dark" type="submit" className="button_black">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col xs={{ span: 4, offset: 1 }}>
            <div className="contactMain__right__item">
              <h5 className="contactMain__right__heading">WORKING HOURS</h5>
              <p className="text contactMain__right__text">
                Monday – Friday, 9:00am – 5:00pm PST.
              </p>
            </div>
            <div className="contactMain__right__item">
              <div className="contactMain__right__icon">
                <img src="commerce_img/contact_home.svg" alt="contact_home" />
                <p className="text contactMain__right__text">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
              <div className="contactMain__right__icon">
                <img src="commerce_img/contact_phone.svg" alt="contact_home" />
                <p className="text contactMain__right__text">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </div>
              <div className="contactMain__right__icon">
                <img src="commerce_img/contact_email.svg" alt="contact_home" />
                <p className="text contactMain__right__text">info@gmail.com</p>
              </div>
            </div>
            <div className="">
              <h5 className="contactMain__right__heading">JOIN US</h5>
              <p className="text contactMain__right__text">
                We are happily open new colloboration. You can ask any questions
                and offer problems by phone, email, Instagram or Facebook.
              </p>
              <div className="contactMain__right__socials">
                <a href="/">
                  <img src="commerce_img/contact_facebook.svg" alt="contact1" />
                </a>
                <a href="/">
                  <img src="commerce_img/contact_google.svg" alt="contact2" />
                </a>
                <a href="/">
                  <img
                    src="commerce_img/contact_instagram.svg"
                    alt="contact3"
                  />
                </a>
                <a href="/">
                  <img src="commerce_img/contact_twitter.svg" alt="contact4" />
                </a>
                <a href="/">
                  <img src="commerce_img/contact_youtube.svg" alt="contact5" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
