import Head from 'next/head';
import MainLayout from '../templates/inform/MainLayout';
import AboutUs from '../templates/inform/aboutUs/AboutUs';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutUs />
      </main>
    </MainLayout>
  );
}
