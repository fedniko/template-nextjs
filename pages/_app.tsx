import '../styles/globals.scss';
import '../templates/inform/header.scss';
import '../templates/inform/footer.scss';
import '../templates/inform/aboutUs/aboutUs.scss';
import '../templates/inform/partners/partners.scss';
import '../templates/inform/map/map.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../templates/inform/mainCarousel/mainCarousel.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
