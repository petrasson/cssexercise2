import styled from 'styled-components';
import Header from '../../shared-components/Header';
import HeadTitle from '../../shared-components/HeadTitle';
import BlogFilter from './components/BlogFilter';
import Footer from '../../shared-components/Footer';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  min-height: 100vh;

  .space {
    padding: 90px 0 40px;
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

function Blog() {
  return (
    <div className="page-wrapper">
      <Header />
      <Container>
        <div className="space">
          <HeadTitle text="Blog" />
        </div>
        <BlogFilter />
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
