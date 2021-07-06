import { Form, Button, InputGroup } from 'react-bootstrap';

const categories = [
  {
    name: 'All',
    results: 309,
  },
  {
    name: 'Fashion',
    results: 128,
  },
  {
    name: 'Furniture',
    results: 23,
  },
  {
    name: 'Travel',
    results: 35,
  },
  {
    name: 'Cosmetic',
    results: 21,
  },
  {
    name: 'Health & Beauty',
    results: 65,
  },
  {
    name: 'Baby',
    results: 26,
  },
  {
    name: 'Jewelry',
    results: 30,
  },
  {
    name: 'Accesories',
    results: 54,
  },
];

const topPosts = [
  {
    title: 'Awesome Theme With Lots Of Features On The Boards !',
    date: 'March 08, 2019',
    img: '/commerce_img/top_posts/1.png',
  },
  {
    title: 'The Houses Are Designed In Elegant Style',
    date: 'May 26, 2019',
    img: '/commerce_img/top_posts/2.png',
  },
  {
    title: 'Young And Dynamic Style For Boys',
    date: 'Aug 12, 2019',
    img: '/commerce_img/top_posts/3.png',
  },
  {
    title: 'New Styles For Designers In The Fall',
    date: 'Oct 08, 2019',
    img: '/commerce_img/top_posts/4.png',
  },
  {
    title: 'Simple But Beautiful Design Of A Fashion Store',
    date: 'Oct 19, 2019',
    img: '/commerce_img/top_posts/5.png',
  },
];

export default function BlogSidebar() {
  return (
    <>
      <InputGroup className="blogSidebar__searchBar">
        <Form.Control type="search" placeholder="Search..." />
        <Button>
          <img src="/commerce_img/ic-search-black.svg" alt="search icon" />
        </Button>
      </InputGroup>
      {categories.map((item) => (
        <div className="blogSidebar__filterItem" key={item.name}>
          <p className="blogSidebar__filterItem__name">{item.name}</p>
          <p className="blogSidebar__filterItem__result">({item.results})</p>
        </div>
      ))}
      <div className="blogSidebar__topPosts">
        <p className="blogSidebar__topPosts__title">Top Posts</p>
        <div className="blogSidebar__topPosts__wrapper">
          {topPosts.map((post) => (
            <div
              className="blogSidebar__topPosts__wrapper__post"
              key={post.title}
            >
              <img
                className="blogSidebar__topPosts__wrapper__post__img"
                src={post.img}
                alt="search icon"
              />
              <div className="blogSidebar__topPosts__wrapper__post__content">
                <div className="blogSidebar__topPosts__wrapper__post__content__title">
                  {post.title}
                </div>
                <div className="blogSidebar__topPosts__wrapper__post__content__date">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
