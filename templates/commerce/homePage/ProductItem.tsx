import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

export default function ProductItem({ p }: any) {
  const dispatch = useDispatch();

  return (
    <div className="productList__item">
      <div className="productList__image">
        <Link href="/product-page">
          <img
            className="productList__image_item"
            src={p.picture}
            alt="news3"
          />
        </Link>
      </div>
      <div className="productList__body">
        <div className="productList__colors">
          {p.colors.map((color: any) => (
            <button type="button" style={{ background: color }} key={color} />
          ))}
        </div>
        <Link href="/product-page">
          <a className="productList__heading">
            <p>{p.name}</p>
          </a>
        </Link>
        <div className="productList__price">
          <p
            className={
              p.old_price != null
                ? 'text productList__price__text active'
                : 'text productList__price__text'
            }
          >
            ${p.price}
          </p>
          <p
            className={
              p.old_price != null
                ? 'text productList__price__text old'
                : 'text productList__price__text null'
            }
          >
            ${p.old_price}
          </p>
        </div>
      </div>
      <Button
        variant="link"
        onClick={() => dispatch({ type: 'CART_INCREMENT' })}
      >
        Add to Cart
      </Button>
    </div>
  );
}
