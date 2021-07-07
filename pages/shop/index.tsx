import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import ShopBanner from '../../templates/commerce/shopList/ShopBanner';
import ShopList from '../../templates/commerce/shopList/ShopList';

export default function ShopPage() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShopBanner />
      <ShopList />
    </MainLayout>
  );
}
