import { Col, Container, Row, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

export default function ItemList({ products, addToCart }: any) {
  const dispatch = useDispatch();

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
              <div className="itemList__item">
                <div className="itemList__image">
                  <Link href="/product-page">
                    <img
                      className="itemList__image_item"
                      src={p.picture}
                      alt="news3"
                    />
                  </Link>
                </div>
                <div className="itemList__body">
                  <div className="itemList__colors">
                    {p.colors.map((color: any) => (
                      <button
                        type="button"
                        style={{ background: color }}
                        key={color}
                      />
                    ))}
                  </div>
                  <Link href="/product-page">
                    <a className="itemList__heading">
                      <p>{p.name}</p>
                    </a>
                  </Link>
                  <p className="text itemList__price">${p.price}</p>
                </div>
                <Button
                  variant="link"
                  onClick={() => dispatch({ type: 'CART_INCREMENT' })}
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
