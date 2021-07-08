// INFORM TEMPLATE
// import '../../styles/inform_styles/globals.scss';
// import '../../templates/inform/header.scss';
// import '../../templates/inform/footer.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../../templates/inform/mainCarousel/mainCarousel.scss';
// import '../../templates/inform/aboutUs/aboutUs.scss';
// import '../../templates/inform/partners/partners.scss';
// import '../../templates/inform/services/services.scss';
// import '../../templates/inform/promotions/promotions.scss';
// import '../../templates/inform/map/map.scss';
// import '../../templates/inform/contactUs/contactUs.scss';
// import '../../templates/inform/news/news.scss';
import '../styles/commerce_styles/globals.scss';
import '../templates/commerce/header.scss';
import '../templates/commerce/footer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../templates/commerce/faq/faq.scss';
import '../templates/commerce/itemList/mainCarousel.scss';
import '../templates/commerce/itemList/itemList.scss';
import '../templates/commerce/itemList/mainBanners.scss';
import '../templates/commerce/itemList/newsletter.scss';
import '../templates/commerce/itemList/itemCarousel.scss';
import '../templates/commerce/itemList/popularCategories.scss';
import '../templates/commerce/itemList/partners.scss';
import '../templates/commerce/productDescr/productDescr.scss';
import '../templates/commerce/productReview/productReview.scss';
import '../templates/commerce/blogSidebar/blogSidebar.scss';
import '../templates/commerce/blogMain/blogMain.scss';
import '../templates/commerce/shopList/shopBanner.scss';
import '../templates/commerce/shopList/shopList.scss';
import '../templates/commerce/shopFilter/shopFilter.scss';
import '../templates/commerce/contactMain/contactMain.scss';
import '../templates/commerce/contactMap/map.scss';
import '../templates/commerce/authModals.scss';
import '../templates/commerce/aboutUs/aboutAdvantages.scss';
import '../templates/commerce/aboutUs/aboutUs.scss';
import '../templates/commerce/aboutUs/aboutPartners.scss';
import '../templates/commerce/cart/cart.scss';
import '../templates/commerce/wishlist/wishlist.scss';

import type { AppProps } from 'next/app';
import wrapper from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);
