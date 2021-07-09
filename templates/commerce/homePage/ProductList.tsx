import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

export default function ProductList({ products }: any) {
  return (
    <section className="itemList">
      <Container>
        <Row className="heading-div">
          <Col>
            <h1 className="heading">Top Trending Products</h1>
          </Col>
        </Row>
        <Row>
          {products.map((p: any) => (
            <Col xs="6" md="4" xl="3" key={p.id * 13}>
              <ProductItem p={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
