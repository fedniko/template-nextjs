import '../styles/globals.scss';
import '../templates/inform/header.scss';
import '../templates/inform/footer.scss';
import '../templates/inform/aboutUs/aboutUs.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
export default MyApp;
