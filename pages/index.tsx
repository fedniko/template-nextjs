import Head from 'next/head';
import { useState } from 'react';
import MainLayout from '../templates/commerce/MainLayout';
import ItemList from '../templates/commerce/itemList/ItemList';
import MainCarousel from '../templates/commerce/itemList/MainCarousel';
import ItemCarousel from '../templates/commerce/itemList/ItemCarousel';
import PopularCategories from '../templates/commerce/itemList/PopularCategories';
import Partners from '../templates/commerce/itemList/Partners';
import NewsLetter from '../templates/commerce/itemList/NewsLetter';
import MainBanners from '../templates/commerce/itemList/MainBanners';

export default function Home() {
  const [cart, setCart] = useState([] as any);
  const [products] = useState([
    {
      id: 1,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item1.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 2,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item2.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 3,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item3.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 4,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 5,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 6,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 7,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 8,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item8.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
  ]);
  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainCarousel />
      <ItemList products={products} addToCart={addToCart} />
      <MainBanners />
      <NewsLetter />
      <ItemCarousel />
      <PopularCategories />
      <Partners />
    </MainLayout>
  );
}
