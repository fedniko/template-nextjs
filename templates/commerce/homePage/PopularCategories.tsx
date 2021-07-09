import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';

export default function PopularCategories() {
  const [links] = useState([
    {
      id: 1,
      title: 'Living room',
      url: '/',
      subtitle: [
        { id: 1, name: 'Accessories', url: '/' },
        { id: 2, name: 'Cabinets', url: '/' },
        { id: 3, name: 'Amchairs', url: '/' },
        { id: 4, name: 'Bookcases', url: '/' },
        { id: 5, name: 'Curtains', url: '/' },
        { id: 6, name: 'Coffee Tables', url: '/' },
      ],
    },
    {
      id: 2,
      title: 'Kitchen & Dining',
      url: '/',
      subtitle: [
        { id: 1, name: 'Appliances', url: '/' },
        { id: 2, name: 'Cabinets', url: '/' },
        { id: 3, name: 'Chairs', url: '/' },
        { id: 4, name: 'Cookware', url: '/' },
        { id: 5, name: 'Curtains', url: '/' },
        { id: 6, name: 'Dining Tables', url: '/' },
      ],
    },
    {
      id: 3,
      title: 'Bedroom',
      url: '/',
      subtitle: [
        { id: 1, name: 'Beds', url: '/' },
        { id: 2, name: 'Curtains', url: '/' },
        { id: 3, name: 'Chets', url: '/' },
        { id: 4, name: 'Lighting', url: '/' },
        { id: 5, name: 'Mattresses', url: '/' },
        { id: 6, name: 'Mirrors', url: '/' },
      ],
    },
    {
      id: 4,
      title: 'Bathroom',
      url: '/',
      subtitle: [
        { id: 1, name: 'Accessories', url: '/' },
        { id: 2, name: 'Cabinets', url: '/' },
        { id: 3, name: 'Lighting', url: '/' },
        { id: 4, name: 'Mirrors', url: '/' },
        { id: 5, name: 'Showers', url: '/' },
        { id: 6, name: 'Sinks', url: '/' },
      ],
    },
    {
      id: 5,
      title: 'Workspace',
      url: '/',
      subtitle: [
        { id: 1, name: 'Bookcases', url: '/' },
        { id: 2, name: 'Chairs', url: '/' },
        { id: 3, name: 'Lighting', url: '/' },
        { id: 4, name: 'Desks', url: '/' },
        { id: 5, name: 'Drawers', url: '/' },
        { id: 6, name: 'Organissers', url: '/' },
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
                  <Link href={link.url}>
                    <a className="">
                      <h5 className="text popularCategories__body__headings_item">
                        {link.title}
                      </h5>
                    </a>
                  </Link>
                </Row>
                {link.subtitle.map((s) => (
                  <Link href={s.url} key={s.id}>
                    <a>{s.name}</a>
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
