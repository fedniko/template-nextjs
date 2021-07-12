import { Col, Container, Pagination, Row, Form } from 'react-bootstrap';
import Link from 'next/link';
import ShopFilter from '../shopFilter/ShopFilter';
import ProductItem from '../homePage/ProductItem';

export default function ShopList({ products }: any) {
  return (
    <section className="shopList">
      <Container>
        <Row>
          <Col xs="3">
            <ShopFilter />
          </Col>
          <Col xs="9">
            <Row className="shopList__right__top">
              <Col className="shopList__select">
                <Form.Group className="shopList__select__group">
                  <Form.Label>Show</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    defaultValue="2"
                  >
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="shopList__select__group">
                  <Form.Label>Sort by</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    defaultValue="1"
                  >
                    <option value="1">Price Low to High</option>
                    <option value="2">Price High to Low</option>
                    <option value="3">Rating High to Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="shopList__icons">
                <Link href="/">
                  <a>
                    <img
                      className=""
                      src="/commerce_img/shoplist_squares.svg"
                      alt="hearth"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img
                      className=""
                      src="/commerce_img/shoplist_list.svg"
                      alt="hearth"
                    />
                  </a>
                </Link>
              </Col>
            </Row>
            <Row>
              {products.map((p: any) => (
                <Col xs="6" md="4" xl="3" key={p.id * 13}>
                  <ProductItem p={p} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <Pagination className="productReview__reviewBlock__main__reviews__pagination">
                  <Pagination.Prev>Pre</Pagination.Prev>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
