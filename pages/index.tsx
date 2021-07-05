import Head from 'next/head';
import MainLayout from '../templates/commerce/MainLayout';
import ItemList from '../templates/commerce/itemList/ItemList';
import MainCarousel from '../templates/commerce/itemList/MainCarousel';
import ItemCarousel from '../templates/commerce/itemList/ItemCarousel';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainCarousel />
        <ItemList />
        <ItemCarousel />
      </main>
    </MainLayout>
  );
}
