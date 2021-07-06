import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../templates/commerce/MainLayout';
import styles from '../styles/commerce_styles/404.module.scss';

export default function Page404() {
  return (
    <MainLayout>
      <Head>
        <title>404: This page could not be found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.page404}>
        <div className={styles.page404__body}>
          <img
            className={styles.image}
            src="commerce_img/404_page.svg"
            alt="404_page"
          />
          <h1 className={styles.heading}>Oops ! Something went wrong.</h1>
          <h2 className={styles.subheading}>
            The page are looking for has been moved or doesn’t exist anymore.
          </h2>
          <Link href="/">
            <a type="button" className={styles.button}>
              Back to Homepage
            </a>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
