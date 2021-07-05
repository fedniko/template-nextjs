import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';

export default function PopularCategories() {
  const [links] = useState([
    {
      id: 1,
      title: 'Living room',
      subtitle: [
        'Accessories',
        'Cabinets',
        'Amchairs',
        'Bookcases',
        'Curtains',
        'Coffee Tables',
      ],
    },
    {
      id: 2,
      title: 'Kitchen & Dining',
      subtitle: [
        'Appliances',
        'Cabinets',
        'Chairs',
        'Cookware',
        'Curtains',
        'Dining Tables',
      ],
    },
    {
      id: 3,
      title: 'Bedroom',
      subtitle: [
        'Beds',
        'Curtains',
        'Chets',
        'Lighting',
        'Mattresses',
        'Mirrors',
      ],
    },
    {
      id: 4,
      title: 'Bathroom',
      subtitle: [
        'Accessories',
        'Cabinets',
        'Lighting',
        'Mirrors',
        'Showers',
        'Sinks',
      ],
    },
    {
      id: 5,
      title: 'Workspace',
      subtitle: [
        'Bookcases',
        'Chairs',
        'Lighting',
        'Desks',
        'Drawers',
        'Organissers',
      ],
    },
  ]);
  return (
    <section className="popularCategories">
      <Container>
        <div className="popularCategories__body">
          <Row className="heading-div">
            <Col>
              <h1 className="heading popularCategories__heading">
                Popular Categories
              </h1>
            </Col>
          </Row>
          <Row>
            {links.map((link) => (
              <Col className="popularCategories__links" key={link.id}>
                <Row>
                  <h5 className="text popularCategories__body__headings_item">
                    {link.title}
                  </h5>
                </Row>
                {link.subtitle.map((s) => (
                  <Link href="/" key={s}>
                    <a>{s}</a>
                  </Link>
                ))}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
