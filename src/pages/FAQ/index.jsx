import styled from "styled-components";
import Header from "../../shared-components/Header";
import HeadTitle from "../../shared-components/HeadTitle";
import Questions from "./components/Questions";
import Footer from "../../shared-components/Footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  min-height: 100vh;

  .space {
    padding: 80px 0 40px;
  }

  p {
    font-size: 16px;
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

function FaqPage() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <div className='space'>
          <HeadTitle text='Frequently asked questions' />
        </div>
        <p>
          The list below includes initial ideas that we think could make
          excellent Grants. This is a living list that will continue to update
          as ideas popup.
        </p>
        <Questions />
      </Container>
      <Footer />
    </div>
  );
}

export default FaqPage;
