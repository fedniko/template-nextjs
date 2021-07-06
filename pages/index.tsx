import Head from 'next/head';
import MainLayout from '../templates/commerce/MainLayout';
import ItemList from '../templates/commerce/itemList/ItemList';
import MainCarousel from '../templates/commerce/itemList/MainCarousel';
import ItemCarousel from '../templates/commerce/itemList/ItemCarousel';
import PopularCategories from '../templates/commerce/itemList/PopularCategories';
import Partners from '../templates/commerce/itemList/Partners';
import NewsLetter from '../templates/commerce/itemList/NewsLetter';
import MainBanners from '../templates/commerce/itemList/MainBanners';

export default function Home() {
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
