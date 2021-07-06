import { Row, Col, Pagination } from 'react-bootstrap';

const posts = [
  {
    title:
      'A Guide To New Orleans’ Best - From Boutique Hotel Maison de la Luz',
    description:
      'One of the most important aspects of vacation has always been choosing accommodations. Finding somewhere relaxing and clean with modern furniture and close to amenities can sometimes make or break a vacation .Choosing a hotel has always been at the top of a priority list when it came to vacation...',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/1.png',
  },
  {
    title: 'How To Care For Wool Furniture',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/2.png',
  },
  {
    title: 'Decorating And Furnishing Small Spaces',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/3.png',
  },
  {
    title: 'Our Favourite 2019 Design Furniture Trends',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/4.png',
  },
  {
    title: 'The Right Way to Layer Lighting with Mitzi',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/5.png',
  },
  {
    title: '6 Amazing Ideas To Improve Your Dining Area',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/6.png',
  },
  {
    title: '5 Modern Airbnbs Travel Bug You Will Love',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/1/7.png',
  },
  {
    title: 'Cozy Living Room Essentials for Fall and Beyond',
    description:
      'One of the most important aspects of vacation has always been choosing accommodations. Finding somewhere relaxing and clean with modern furniture and close to amenities can sometimes make or break a vacation .Choosing a hotel has always been at the top of a priority list when it came to vacation...',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/1.png',
  },
  {
    title: 'Incredible Before & After Living Room Makeovers',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/2.png',
  },
  {
    title: 'Accent Walls for Every Style of Living Room',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/3.png',
  },
  {
    title: 'Furniture Ideas for Dog and Cat Owners',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/4.png',
  },
  {
    title: 'Pick Your Perfect Pillow With Our Quiz',
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/5.png',
  },
  {
    title: "Guide to Mattress Toppers & Mattress Pads: What's the Difference?",
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/6.png',
  },
  {
    title:
      "Can't Live Without: Parachute Moms Share Their Must-Have Baby Items",
    author: 'Dorothy Bell',
    date: 'Nov 05, 2019',
    img: '/commerce_img/blog_posts/2/7.png',
  },
];

export default function BlogMain() {
  return (
    <Row>
      {posts.map((post, index) => (
        <Col
          md={index === 0 || index === 7 ? '12' : '4'}
          xs="12"
          className={
            index === 0 || index === 7 ? `blogMain__post big` : 'blogMain__post'
          }
          key={post.title}
        >
          <img
            className="blogMain__post__img"
            src={post.img}
            alt="post preview"
          />
          <div className="blogMain__post__author">
            By {post.author} - {post.date}
          </div>
          <div className="blogMain__post__title">{post.title}</div>
          <div className="blogMain__post__descr">{post.description}</div>
        </Col>
      ))}
      <Pagination className="mb-5">
        <Pagination.Prev>Pre</Pagination.Prev>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next>Next</Pagination.Next>
      </Pagination>
    </Row>
  );
}
