import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);
