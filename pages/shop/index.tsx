import Head from 'next/head';
import { useState } from 'react';
import MainLayout from '../../templates/commerce/MainLayout';
import ShopBanner from '../../templates/commerce/shopList/ShopBanner';
import ShopList from '../../templates/commerce/shopList/ShopList';

export default function ShopPage() {
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
    {
      id: 9,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item1.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 10,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item2.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 11,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item3.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 12,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 13,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 14,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 15,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 16,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item8.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 17,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item4.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 18,
      name: 'Bucklo Wrop Wooden Table',
      price: 56.12,
      picture: '/commerce_img/item5.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 19,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item6.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
    {
      id: 20,
      name: 'Bucklo Wrop Wooden Table',
      price: 69.36,
      picture: '/commerce_img/item7.png',
      colors: ['#0F1214', '#F5222D', '#FAAD14', '#71767C', '#52C41A'],
    },
  ]);
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShopBanner />
      <ShopList products={products} />
    </MainLayout>
  );
}
