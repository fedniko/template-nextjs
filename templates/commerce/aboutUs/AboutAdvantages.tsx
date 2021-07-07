import { Col, Container, Row } from 'react-bootstrap';

export default function AboutAdvantages() {
  return (
    <section className="aboutAdvantages">
      <Container>
        <Row>
          <Col className="aboutAdvantages__col">
            <h2 className="aboutAdvantages__col__title">
              Makes Everything So Much Eastier
              <br />
              It’s Even More With Melor
            </h2>
            <p>
              We believe that when we take care of our home, it takes care of
              us. That’s why we make premium quality sheets, towels, robes, rugs
              and all things soft and wonderful.
            </p>
            <div className="aboutAdvantages__col__imgs">
              <img src="/commerce_img/aboutUs/img2.png" alt="img2" />
              <img src="/commerce_img/aboutUs/img3.png" alt="img3" />
            </div>
            <p>
              Sed vulputate elit vitae magna lacinia, vel bibendum neque
              faucibus. Aliquam sed volutpat turpis. Phasellus nisl arcu,
              pretium eu faucibus sed, aliquet in lacus. Pellentesque sed lacus
              et ipsum rutrum dignissim. Praesent ultrices posuere eros ac
              tristique.
              <br />
              <br />
              Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
              lacusemper elit. Cras neque nulla, convallis non commodo et,
              euismod nonsese. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium.
              <br />
              <br />
              Sed vulputate elit vitae magna lacinia, vel bibendum neque
              faucibus. Aliquam sed volutpat turpis. Phasellus nisl arcu,
              pretium eu faucibus sed, aliquet in lacus. Pellentesque sed lacus
              et ipsum rutrum dignissim. Praesent ultrices posuere eros ac
              tristique.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
