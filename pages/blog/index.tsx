import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import BlogSidebar from '../../templates/commerce/blogSidebar/BlogSidebar';
import BlogMain from '../../templates/commerce/blogMain/BlogMain';
import MainLayout from '../../templates/commerce/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Row>
            <Col md="3" xs="12" className="blogSidebar">
              <BlogSidebar />
            </Col>
            <Col md="9" xs="12" className="blogMain">
              <BlogMain />
            </Col>
          </Row>
        </Container>
      </main>
    </MainLayout>
  );
}
