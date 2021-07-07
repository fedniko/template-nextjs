import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import FAQ from '../../templates/commerce/faq/FAQ';

export default function FAQHome() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FAQ />
    </MainLayout>
  );
}
