import { Col, Container, Row, Button, Form } from 'react-bootstrap';

export default function NewsLetter() {
  return (
    <section className="newsLetter">
      <Container>
        <Row className="heading-div">
          <Col>
            <h1 className="heading">JOIN OUR NEWSLETTER NOW</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="newsLetter__form">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="e-mail" />
                <Form.Text className="text-muted">
                  Will be used in accordance with our Privacy Policy
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                SIGN UP
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
