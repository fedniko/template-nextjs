import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import WishlistMain from '../../templates/commerce/wishlist/Wishlist';
import ProductListCarousel from '../../templates/commerce/homePage/ProductListCarousel';

export default function Wishlist() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WishlistMain />
      <ProductListCarousel />
    </MainLayout>
  );
}
