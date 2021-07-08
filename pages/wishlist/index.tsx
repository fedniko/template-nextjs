import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import WishlistMain from '../../templates/commerce/wishlist/Wishlist';
import ItemCarousel from '../../templates/commerce/itemList/ItemCarousel';

export default function Wishlist() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WishlistMain />
      <ItemCarousel />
    </MainLayout>
  );
}
