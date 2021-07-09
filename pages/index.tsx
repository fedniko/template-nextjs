import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from '../templates/commerce/MainLayout';
import ItemList from '../templates/commerce/itemList/ItemList';
import MainCarousel from '../templates/commerce/itemList/MainCarousel';
import ItemCarousel from '../templates/commerce/itemList/ItemCarousel';
import PopularCategories from '../templates/commerce/itemList/PopularCategories';
import Partners from '../templates/commerce/itemList/Partners';
import NewsLetter from '../templates/commerce/itemList/NewsLetter';
import MainBanners from '../templates/commerce/itemList/MainBanners';
import API, { GetCSRF } from '../components/api';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetCSRF()
      .then(() => {
        API.get('auth/user')
          .then(({ data }: any) => {
            dispatch({ type: 'LOG_IN', ...data });
          })
          .catch((error: any) => {
            console.error('API.get(auth/user)', error);
          });
      })
      .catch((error: any) => {
        console.error('GetCSRF:', error);
      });
    // eslint-disable-next-line
  }, []);

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
