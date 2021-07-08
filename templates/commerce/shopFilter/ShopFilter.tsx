import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';

export default function ShopFilter() {
  const [active, setActive] = useState(true);
  const [typeActive, setTypeActive] = useState(true);
  const [colorActive, setColorActive] = useState(true);
  const [priceActive, setPriceActive] = useState(true);

  const [categories] = useState([
    {
      id: 1,
      title: 'Accessories',
      url: '/',
    },
    {
      id: 2,
      title: 'Cabinets',
      url: '/',
    },
    {
      id: 3,
      title: 'Amchairs',
      url: '/',
    },
    {
      id: 4,
      title: 'Bookcases',
      url: '/',
    },
    {
      id: 5,
      title: 'Curtains',
      url: '/',
    },
    {
      id: 6,
      title: 'Coffee tables',
      url: '/',
    },
    {
      id: 7,
      title: 'Decor',
      url: '/',
    },
    {
      id: 8,
      title: 'Ottomans',
      url: '/',
    },
    {
      id: 9,
      title: 'Floor Lamps',
      url: '/',
    },
  ]);

  const [types] = useState([
    {
      id: 1,
      title: 'Wooden',
      checked: true,
    },
    {
      id: 2,
      title: 'Iron',
      checked: false,
    },
    {
      id: 3,
      title: 'Ceramic',
      checked: false,
    },
    {
      id: 4,
      title: 'Material',
      checked: false,
    },
    {
      id: 5,
      title: 'Glass',
      checked: false,
    },
  ]);

  const [colors] = useState({
    value: [
      '#1D1F1F',
      '#828282',
      '#BDBDBD',
      '#0F2C72',
      '#EB5757',
      '#F2994A',
      '#CDD454',
      '#219653',
      '#6FCF97',
      '#2F80ED',
      '#56CCF2',
      '#9B51E0',
      '#BB6BD9',
    ],
  });
  return (
    <section className="shopFilter">
      <h2 className="text shopFilter__heading">Filter</h2>
      <div className="shopFilter__close">
        <a>
          <img src="commerce_img/close.svg" alt="close" />
          Accessories
        </a>
        <a>
          <img src="commerce_img/close.svg" alt="close" />
          Wooden
        </a>
      </div>
      <div className="shopFilter__accordion-item">
        <div
          className={
            active
              ? 'shopFilter__accordion-item__trigger active'
              : 'shopFilter__accordion-item__trigger'
          }
          onClick={() => (active ? setActive(false) : setActive(true))}
        >
          Categories
        </div>
        <div
          className={
            active
              ? 'shopFilter__accordion-item__content active'
              : 'shopFilter__accordion-item__content'
          }
        >
          {categories.map((cat) => (
            <Link href={cat.url} key={cat.id}>
              <a className="shopFilter__accordion-item__content__link">
                {cat.title}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="shopFilter__accordion-item">
        <div
          className={
            typeActive
              ? 'shopFilter__accordion-item__trigger active'
              : 'shopFilter__accordion-item__trigger'
          }
          onClick={() =>
            typeActive ? setTypeActive(false) : setTypeActive(true)
          }
        >
          Types
        </div>
        <div
          className={
            typeActive
              ? 'shopFilter__types shopFilter__accordion-item__content active'
              : 'shopFilter__types shopFilter__accordion-item__content'
          }
        >
          {types.map((type) => (
            <Form.Check
              type="checkbox"
              id={`checkbox-${type.id}`}
              defaultChecked={type.checked}
              label={type.title}
              className="shopFilter__accordion-item__content__checkbox"
              key={type.id}
            />
          ))}
        </div>
      </div>

      <div className="shopFilter__accordion-item">
        <div
          className={
            colorActive
              ? 'shopFilter__accordion-item__trigger active'
              : 'shopFilter__accordion-item__trigger'
          }
          onClick={() =>
            colorActive ? setColorActive(false) : setColorActive(true)
          }
        >
          Colors
        </div>
        <div
          className={
            colorActive
              ? 'shopFilter__colors shopFilter__accordion-item__content active'
              : 'shopFilter__colors shopFilter__accordion-item__content'
          }
        >
          {colors.value.map((color) => (
            <button type="button" style={{ background: color }} key={color} />
          ))}
        </div>
      </div>

      <div className="shopFilter__accordion-item">
        <div
          className={
            priceActive
              ? 'shopFilter__accordion-item__trigger active'
              : 'shopFilter__accordion-item__trigger'
          }
          onClick={() =>
            priceActive ? setPriceActive(false) : setPriceActive(true)
          }
        >
          Price Range
        </div>
        <div
          className={
            priceActive
              ? 'shopFilter__price shopFilter__accordion-item__content active'
              : 'shopFilter__price shopFilter__accordion-item__content'
          }
        >
          <Form.Range />
        </div>
      </div>
    </section>
  );
}
