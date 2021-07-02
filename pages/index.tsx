import Head from 'next/head';
import MainLayout from '../templates/commerce/MainLayout';
import ItemList from '../templates/commerce/itemList/ItemList';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ItemList />
      </main>
    </MainLayout>
  );
}
