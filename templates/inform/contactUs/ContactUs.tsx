import { Button, Col, Container, Row } from 'react-bootstrap';

export default function ContactUs() {
  return (
    <section className="contactUs">
      <Container>
        <Row className="align-items-center contactUs__item">
          <Col
            md="6"
            lg="7"
            className="contactUs__item__left d-flex flex-column justify-content-center"
          >
            <h2 className="contactUs__heading">Lorem ipsum?</h2>
            <p className="text contactUs__text">Lorem ipsum dolor</p>
            <form>
              <Row className="align-items-center contactUs__inputs">
                <Col>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control contactUs__input"
                      id="floatingInput"
                      placeholder="John Week"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      className="contactUs__floatingInput_label"
                      htmlFor="floatingInput"
                    >
                      Ваше имя
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control contactUs__input"
                      id="floatingInput2"
                      placeholder="Phone number"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      className="contactUs__floatingInput_label"
                      htmlFor="floatingInput2"
                    >
                      Номер телефона
                    </label>
                  </div>
                </Col>
              </Row>
            </form>
            <Row className="align-items-center">
              <Col>
                <p className="text contactUs__text_mini">
                  Нажимая на кнопку «Заказать консультацию», я соглашаюсь с
                  условиями обработки персональных данных
                </p>
              </Col>
              <Col>
                <Button
                  type="submit"
                  variant="outline-primary"
                  size="lg"
                  className="button contactUs__button"
                >
                  Заказать консультацию
                </Button>{' '}
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
            className="contactUs__item__right d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className="contactUs__heading right">Lorem ipsum</h2>
            <p className="text contactUs__text contactUs__text right">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat.
            </p>
            <Button
              variant="outline-primary"
              size="lg"
              className="button contactUs__button right"
            >
              Узнать больше &#8594;
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
