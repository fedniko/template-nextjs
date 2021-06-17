import Head from 'next/head';
import MainLayout from '../templates/inform/MainLayout';
import AboutUs from '../templates/inform/aboutUs/AboutUs';
import Partners from '../templates/inform/partners/Partners';
import Maps from '../templates/inform/map/Map';
import MainCarousel from '../templates/inform/mainCarousel/MainCarousel';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainCarousel />
        <AboutUs />
        <Partners />
        <Maps />
      </main>
    </MainLayout>
  );
}
