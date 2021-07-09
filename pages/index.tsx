import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import MainLayout from '../templates/commerce/MainLayout';
import ItemList from '../templates/commerce/itemList/ItemList';
import MainCarousel from '../templates/commerce/itemList/MainCarousel';
import ItemCarousel from '../templates/commerce/itemList/ItemCarousel';
import PopularCategories from '../templates/commerce/itemList/PopularCategories';
import Partners from '../templates/commerce/itemList/Partners';
import NewsLetter from '../templates/commerce/itemList/NewsLetter';
import MainBanners from '../templates/commerce/itemList/MainBanners';
import { GetUser } from '../components/api';
import { IRootState } from '../redux/types';

export default function Home() {
  const { isLoading } = useSelector((state: IRootState) => state.app);
  const dispatch = useDispatch();

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
      <MainCarousel />
      <ItemList />
      <MainBanners />
      <NewsLetter />
      <ItemCarousel />
      <PopularCategories />
      <Partners />
    </MainLayout>
  );
}
