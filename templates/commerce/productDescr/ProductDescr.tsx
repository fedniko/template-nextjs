import { Container, Row, Col } from 'react-bootstrap';

export default function ProductDescr() {
  return (
    <section className="productDescr">
      <Container>
        <Row className="align-items-center">
          <Col md="4" xs="12" className="productDescr__imgBlock d-flex">
            <div className="productDescr__imgBlock__left">
              <img
                src="commerce_img/products/product-img1.png"
                alt="product-img1"
              />
              <img
                src="commerce_img/products/product-img2.png"
                alt="product-img2"
              />
              <img
                src="commerce_img/products/product-img3.png"
                alt="product-img3"
              />
            </div>
            <div className="productDescr__imgBlock__right">
              <img
                src="commerce_img/products/product-img1.png"
                alt="product-img1"
              />
            </div>
          </Col>
          <Col md="4" xs="12" className="productDescr__descrBlock">
            <p className="productDescr__descrBlock__title">
              Bucklo Wrop Wooden Chair
            </p>
            <img
              className="productDescr__descrBlock__rating"
              src="commerce_img/5stars.png"
              alt="5stars"
            />
            <p className="productDescr__descrBlock__description grey">
              Est diam debitis an, error recusabo id pro, quo eripuit civibus
              ut. Mel ut tamquam erroribus, ad nonumy vituperata mei. Et qui
              falli latine consequuntur. In appellantur concludaturque pro. Est
              diam debitis an, error recusabo id pro, quo eripuit civibus ut.
            </p>
            <div className="productDescr__descrBlock__stock d-flex justify-content-between grey">
              <p>IN STOCK</p>
              <p>SKU: 102 05</p>
            </div>
            <div className="divider" />
            <div className="productDescr__descrBlock__colors">
              <p>Color</p>
              <div>
                <img
                  className="active"
                  src="commerce_img/colors/1.png"
                  alt="colors1"
                />
                <img src="commerce_img/colors/2.png" alt="colors2" />
                <img src="commerce_img/colors/3.png" alt="colors3" />
                <img src="commerce_img/colors/4.png" alt="colors4" />
                <img src="commerce_img/colors/5.png" alt="colors5" />
              </div>
            </div>
            <div className="productDescr__descrBlock__dimension">
              <p>Dimension</p>
              <ul>
                <li className="pro active">40x60 cm</li>
                <li className="pro">60x80 cm</li>
                <li className="pro">80x120 cm</li>
              </ul>
            </div>
          </Col>
          <Col md="4" xs="12" className="productDescr__priceBlock">
            <div className="productDescr__priceBlock__quantity">
              <p>Quantity</p>
              <div>
                <img src="commerce_img/icon_minus.svg" alt="icon_minus" />
                <p>01</p>
                <img src="commerce_img/icon_plus.svg" alt="icon_plus" />
              </div>
            </div>
            <div className="productDescr__priceBlock__price">
              <p className="productDescr__priceBlock__price__actual">$88.00</p>
              <p className="productDescr__priceBlock__price__old">$126.00</p>
              <p className="productDescr__priceBlock__price__discount">-30%</p>
            </div>
            <div className="productDescr__priceBlock__cartButton">
              <button
                type="button"
                className="productDescr__priceBlock__cartButton__addToCartButton"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="productDescr__priceBlock__cartButton__addToFavoriteButton"
              >
                <img src="commerce_img/icon_heart.svg" alt="icon_heart" />
              </button>
            </div>
            <button
              type="button"
              className="productDescr__priceBlock__buyButton"
            >
              Buy It Now!
            </button>
            <div className="productDescr__priceBlock__wishlist">
              <img src="commerce_img/bags.png" alt="bags" />
              <p>
                <b>Other people want this. 138</b> people have this in their
                carts right now.
              </p>
            </div>
            <p className="productDescr__priceBlock__delivery">
              Want it delivered by <b>Monday, 22 July ?</b>
            </p>
            <p className="productDescr__priceBlock__order">
              Order within <b>20 Hrs : 0 Min : 49 Sec</b>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
