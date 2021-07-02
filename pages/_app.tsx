import '../styles/commerce_styles/globals.scss';
import '../templates/commerce/header.scss';
import '../templates/commerce/footer.scss';
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
