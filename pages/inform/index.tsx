import Head from 'next/head';
import MainLayout from '../../templates/inform/MainLayout';
import AboutUs from '../../templates/inform/aboutUs/AboutUs';
import Partners from '../../templates/inform/partners/Partners';
import Maps from '../../templates/inform/map/Map';
import MainCarousel from '../../templates/inform/mainCarousel/MainCarousel';
import Promotions from '../../templates/inform/promotions/Promotions';
import ContactUs from '../../templates/inform/contactUs/ContactUs';
import Services from '../../templates/inform/services/Services';
import News from '../../templates/inform/news/News';

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
        <Services />
        <Promotions />
        <Maps />
        <ContactUs />
        <News />
      </main>
    </MainLayout>
  );
}
