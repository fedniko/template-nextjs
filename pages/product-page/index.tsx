import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import ProductDescr from '../../templates/commerce/productDescr/ProductDescr';
import ProductReview from '../../templates/commerce/productReview/ProductReview';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDescr />
      <ProductReview />
    </MainLayout>
  );
}
