import '../styles/globals.scss';
import '../templates/inform/header.scss';
import '../templates/inform/footer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../templates/inform/mainCarousel/mainCarousel.scss';
import '../templates/inform/aboutUs/aboutUs.scss';
import '../templates/inform/partners/partners.scss';
import '../templates/inform/services/services.scss';
import '../templates/inform/promotions/promotions.scss';
import '../templates/inform/map/map.scss';
import '../templates/inform/contactUs/contactUs.scss';
import '../templates/inform/news/news.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
