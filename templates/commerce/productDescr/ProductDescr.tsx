import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function ProductDescr() {
  const [params, setParams] = useState({
    quantity: 1,
    previews: [
      'commerce_img/products/product-img1.png',
      'commerce_img/products/product-img2.png',
      'commerce_img/products/product-img3.png',
    ],
    selectedPreview: 0,
    colors: [
      'commerce_img/colors/1.png',
      'commerce_img/colors/2.png',
      'commerce_img/colors/3.png',
      'commerce_img/colors/4.png',
      'commerce_img/colors/5.png',
    ],
    selectedColor: 0,
    dimensions: ['40x60 cm', '60x80 cm', '80x120 cm'],
    selectedDimension: 0,
  });

  return (
    <section className="productDescr">
      <Container>
        <Row className="align-items-center">
          <Col md="4" xs="12" className="productDescr__imgBlock d-flex">
            <div className="productDescr__imgBlock__left">
              {params.previews.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt="product-img"
                  className={params.selectedPreview === index ? 'selected' : ''}
                  onClick={() =>
                    setParams({
                      ...params,
                      selectedPreview: index,
                    })
                  }
                />
              ))}
            </div>
            <div className="productDescr__imgBlock__right">
              <img
                src={params.previews[params.selectedPreview]}
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
                {params.colors.map((color, index) => (
                  <img
                    className={params.selectedColor === index ? 'active' : ''}
                    key={color}
                    src={color}
                    alt="color preview"
                    onClick={() =>
                      setParams({
                        ...params,
                        selectedColor: index,
                      })
                    }
                  />
                ))}
              </div>
            </div>
            <div className="productDescr__descrBlock__dimension">
              <p>Dimension</p>
              <ul>
                {params.dimensions.map((dim, index) => (
                  <li
                    className={
                      params.selectedDimension === index ? 'pro active' : 'pro'
                    }
                    key={dim}
                    onClick={() =>
                      setParams({
                        ...params,
                        selectedDimension: index,
                      })
                    }
                  >
                    {dim}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md="4" xs="12" className="productDescr__priceBlock">
            <div className="productDescr__priceBlock__quantity">
              <p>Quantity</p>
              <div>
                <img
                  className={params.quantity === 0 ? 'disabled' : ''}
                  src="commerce_img/icon_minus.svg"
                  alt="icon_minus"
                  onClick={() => {
                    if (params.quantity !== 0) {
                      setParams({ ...params, quantity: params.quantity - 1 });
                    }
                  }}
                />
                <p>{params.quantity}</p>
                <img
                  className={params.quantity === 10 ? 'disabled' : ''}
                  src="commerce_img/icon_plus.svg"
                  alt="icon_plus"
                  onClick={() => {
                    if (params.quantity < 10) {
                      setParams({ ...params, quantity: params.quantity + 1 });
                    }
                  }}
                />
              </div>
            </div>
            <div className="productDescr__priceBlock__price">
              <p className="productDescr__priceBlock__price__actual">$88.00</p>
              <p className="productDescr__priceBlock__price__old">$126.00</p>
              <p className="productDescr__priceBlock__price__discount">-30%</p>
            </div>
            <div className="productDescr__priceBlock__cartButton">
              <Button
                type="button"
                className="button productDescr__priceBlock__cartButton__addToCartButton"
              >
                Add to Cart
              </Button>
              <button
                type="button"
                className="productDescr__priceBlock__cartButton__addToFavoriteButton"
              >
                <img src="commerce_img/icon_heart.svg" alt="icon_heart" />
              </button>
            </div>
            <Button
              type="button"
              className="button_black productDescr__priceBlock__buyButton"
            >
              Buy It Now!
            </Button>
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
