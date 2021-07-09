import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import CartMain from '../../templates/commerce/cart/Cart';
import ProductListCarousel from '../../templates/commerce/homePage/ProductListCarousel';

export default function Cart() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartMain />
      <ProductListCarousel />
    </MainLayout>
  );
}
