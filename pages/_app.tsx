import '../styles/commerce_styles/globals.scss';
import '../templates/commerce/header.scss';
import '../templates/commerce/footer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../templates/commerce/itemList/mainCarousel.scss';
import '../templates/commerce/itemList/itemList.scss';
import '../templates/commerce/itemList/newsletter.scss';
import '../templates/commerce/itemList/itemCarousel.scss';
import '../templates/commerce/itemList/popularCategories.scss';
import '../templates/commerce/itemList/partners.scss';
import '../templates/commerce/productDescr/productDescr.scss';
import '../templates/commerce/productReview/productReview.scss';

import type { AppProps } from 'next/app';
import wrapper from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);
