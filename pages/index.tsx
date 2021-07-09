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
import API, { GetCSRF } from '../components/api';
import { IRootState } from '../redux/types';

export default function Home() {
  const { isLoading } = useSelector((state: IRootState) => state.app);
  const dispatch = useDispatch();

  function getUser() {
    API.get('auth/user')
      .then(({ data }: any) => {
        dispatch({ type: 'LOADING_OFF' });
        dispatch({ type: 'LOG_IN', ...data });
      })
      .catch((error: any) => {
        dispatch({ type: 'LOADING_OFF' });
        console.error('API.get(auth/user)', error);
      });
  }

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .map((c) => {
        const key = c.split('=')[0];
        const value = c.split('=')[1];
        return { key, value };
      })
      .some((c) => c.key === 'XSRF-TOKEN');
    console.log('cookie: ', cookie);
    if (cookie) {
      console.log('GETUSER');
      getUser();
    } else {
      console.log('GETCSRF + GETUSER');
      GetCSRF()
        .then(() => {
          getUser();
        })
        .catch((error: any) => {
          console.error('GetCSRF:', error);
        });
    }
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <Spinner variant="primary" animation="border" role="status" />
      </Container>
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
