import styled from "styled-components";
import Header from "../../shared-components/Header";
import HeadTitle from "../../shared-components/HeadTitle";
import Footer from "../../shared-components/Footer";
import Form from "./components/Form";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  // padding: 0 24px;
  width: 100%;

  .space {
    padding: 80px 0 40px;
  }

  p {
    font-size: 16px;
  }

  @media only screen and (width >= 1305px) {
    // padding: 0 108px;
  }
`;

function Application() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <div className='space'>
          <HeadTitle text='Apply for a grant' />
        </div>
        <p>Please complete application below for Grant consideration!</p>
        <Form />
      </Container>
      <Footer />
    </div>
  );
}

export default Application;
