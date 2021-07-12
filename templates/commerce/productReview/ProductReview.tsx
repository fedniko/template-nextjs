import { Container, Row, Col, Form, Button, Pagination } from 'react-bootstrap';

const reviews = [
  {
    id: 0,
    name: 'Amanda Spencer',
    date: 'June 28, 2019',
    review:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.',
  },
  {
    id: 1,
    name: 'John Nguyen',
    date: 'June 15, 2019',
    review:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas.',
  },
  {
    id: 2,
    name: 'Jessica Jung',
    date: 'June 02, 2019',
    review:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.',
  },
  {
    id: 3,
    name: 'Sergey Bin',
    date: 'May 18, 2019',
    review:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
];

const ReviewCard = ({ review, index }: any) => (
  <>
    <div className="reviewCard">
      <div className="reviewCard__top">
        <div className="reviewCard__top__customer">
          <img
            className="reviewCard__top__customer__pic"
            src={`commerce_img/customers/${index + 1}.png`}
            alt="avatar"
          />
          <div className="reviewCard__top__customer__info">
            <div className="reviewCard__top__customer__info__name">
              {review.name}
            </div>
            <div className="reviewCard__top__customer__info__date">
              {review.date}
            </div>
          </div>
        </div>
        <div className="reviewCard__top__rating">
          <img
            className="productDescr__descrBlock__rating"
            src="commerce_img/5stars.png"
            alt="5stars"
          />
        </div>
      </div>
      <div className="reviewCard__middle">{review.review}</div>
      <div className="reviewCard__bottom">
        <p>Like</p>
        <p>Reply</p>
      </div>
    </div>
    {reviews.length !== index + 1 && <div className="divider my-3" />}
  </>
);

export default function ProductReview() {
  return (
    <section className="productReview">
      <Container>
        <Row>
          <Col md="2" xs="12" className="productReview__tabsBlock">
            <div className="productReview__tabsBlock__tab">Description</div>
            <div className="productReview__tabsBlock__tab">Speciations</div>
            <div className="productReview__tabsBlock__tab active">Reviews</div>
          </Col>
          <Col md="10" xs="12" className="productReview__reviewBlock">
            <div className="productReview__reviewBlock__header">
              <div className="productReview__reviewBlock__header__title">
                What people says about
                <br />
                this product
              </div>
              <div className="productReview__reviewBlock__header__rating">
                <img
                  className="productDescr__descrBlock__rating"
                  src="commerce_img/5stars.png"
                  alt="5stars"
                />
                <p>58 out of 82 (77%)</p>
                <p>Customers recommended this product</p>
              </div>
            </div>
            <div className="divider" />
            <div className="productReview__reviewBlock__main">
              <Col
                md="6"
                xs="12"
                className="productReview__reviewBlock__main__reviews"
              >
                <div className="productReview__reviewBlock__main__reviews__select">
                  <Form.Group className="productReview__reviewBlock__main__reviews__select__input d-flex">
                    <Form.Label>Sort by</Form.Label>
                    <Form.Control as="select">
                      <option>Most recent</option>
                      <option>Most recent</option>
                      <option>Most recent</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                {reviews.map((review, index) => (
                  <ReviewCard review={review} key={review.name} index={index} />
                ))}
                <Pagination>
                  <Pagination.Prev>Pre</Pagination.Prev>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </Col>
              <Col
                md="6"
                xs="12"
                className="productReview__reviewBlock__main__reviewForm"
              >
                <p className="productReview__reviewBlock__main__reviewForm__title">
                  Write a review
                </p>
                <Form.Group
                  className="productReview__reviewBlock__main__reviewForm__name reviewForm"
                  controlId="formName"
                >
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="email" placeholder="ex: Julie Sample" />
                  <Form.Text className="text-muted">
                    *Will be displayed on the comment.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="productReview__reviewBlock__main__reviewForm__email reviewForm"
                  controlId="formEmail"
                >
                  <Form.Label>Your email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ex: julie@gmail.com"
                  />
                  <Form.Text className="text-muted">
                    *Authentication only - we won&apos;t spam you.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="productReview__reviewBlock__main__reviewForm__rating reviewForm"
                  controlId="formRating"
                >
                  <Form.Label>Rating</Form.Label>
                  <Form.Control as="select" defaultValue="DEFAULT">
                    <option value="DEFAULT" disabled>
                      Choose rating
                    </option>
                    <option>1 star</option>
                    <option>2 stars</option>
                    <option>3 stars</option>
                    <option>4 stars</option>
                    <option>5 stars</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  className="productReview__reviewBlock__main__reviewForm__review reviewForm"
                  controlId="formReview"
                >
                  <Form.Label>Reviews</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write your review here."
                    rows={3}
                  />
                </Form.Group>
                <div className="productReview__reviewBlock__main__reviewForm__submit reviewForm">
                  <Button type="button">Submit</Button>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
