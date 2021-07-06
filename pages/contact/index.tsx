import Head from 'next/head';
import MainLayout from '../../templates/commerce/MainLayout';
import ContactMain from '../../templates/commerce/contactMain/ContactMain';

export default function ContactUs() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactMain />
    </MainLayout>
  );
}
