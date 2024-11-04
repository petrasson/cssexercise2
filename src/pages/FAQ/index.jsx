import styled from 'styled-components';
import Header from '../../shared-components/Header';
import HeadTitle from '../../shared-components/HeadTitle';
import Questions from './components/Questions';
import Footer from '../../shared-components/Footer';
import Apply from '../../shared-components/Apply';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  min-height: 100vh;

  .space {
    padding: 90px 0 40px;
  }

  p {
    font-size: 16px;
    margin: 0 0 15px 0;
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

function FaqPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <Container>
        <div className="space">
          <HeadTitle text="Frequently asked questions" />
        </div>
        <Questions />
        <Apply />
      </Container>
      <Footer />
    </div>
  );
}

export default FaqPage;
