import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { GetUser } from '../components/api';
import { IRootState } from '../redux/types';
import MainLayout from '../templates/commerce/MainLayout';
import ProductList from '../templates/commerce/homePage/ProductList';
import MainCarousel from '../templates/commerce/homePage/MainCarousel';
import ProductListCarousel from '../templates/commerce/homePage/ProductListCarousel';
import PopularCategories from '../templates/commerce/homePage/PopularCategories';
import Partners from '../templates/commerce/homePage/Partners';
import NewsLetter from '../templates/commerce/homePage/NewsLetter';
import MainBanners from '../templates/commerce/homePage/MainBanners';

export default function Home() {
  const { isLoading } = useSelector((state: IRootState) => state.app);
  const dispatch = useDispatch();

  const [products] = useState([
    {
      id: 1,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item1.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 2,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item2.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 3,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      old_price: 69.36,
      picture: '/commerce_img/item3.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 4,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 5,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      old_price: 69.36,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 6,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 7,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 8,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      old_price: 69.36,
      picture: '/commerce_img/item8.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
  ]);

  useEffect(() => {
    GetUser()
      .then(({ data }: any) => {
        dispatch({ type: 'LOADING_OFF' });
        dispatch({ type: 'LOG_IN', ...data });
      })
      .catch((error: any) => {
        dispatch({ type: 'LOADING_OFF' });
        console.error('GetUser()', error);
      });
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ height: '100vh' }}
        >
          <Spinner variant="primary" animation="border" role="status" />
        </Container>
      </>
    );
  }

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainCarousel products={products} />
      <ProductList products={products} />
      <MainBanners />
      <NewsLetter />
      <ProductListCarousel products={products} />
      <PopularCategories />
      <Partners />
    </MainLayout>
  );
}
