import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import Cart from '../../templates/commerce/cart/Cart';
import ItemCarousel from '../../templates/commerce/itemList/ItemCarousel';

export default function FAQHome() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
      <ItemCarousel />
    </MainLayout>
  );
}
