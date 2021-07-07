import Head from 'next/head';
import AboutUs from '../../templates/commerce/aboutUs/AboutUs';
import AboutAdvantages from '../../templates/commerce/aboutUs/AboutAdvantages';
import AboutPartners from '../../templates/commerce/aboutUs/AboutPartners';
import MainLayout from '../../templates/commerce/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUs />
      <AboutAdvantages />
      <AboutPartners />
    </MainLayout>
  );
}
