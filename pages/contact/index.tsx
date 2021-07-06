import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import ContactMain from '../../templates/commerce/contactMain/ContactMain';
import Maps from '../../templates/commerce/contactMap/Map';

export default function ContactUs() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactMain />
      <Maps />
    </MainLayout>
  );
}
