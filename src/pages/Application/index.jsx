import styled from "styled-components";
import Header from "../../shared-components/Header";
import HeadTitle from "../../shared-components/HeadTitle";
import Footer from "../../shared-components/Footer";
import Form from "./components/Form";
import { useEffect } from "react";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  // padding: 0 24px;
  width: 100%;

  .space {
    padding: 60px 0 40px;
  }

  .text {
    font-size: 16px;
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
  }

  .purple {
    color: var(--accent-color);
  }

  @media only screen and (width >= 1305px) {
    // padding: 0 108px;
  }
`;

function Application() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <div className='space'>
          <HeadTitle text='Apply for a grant' />
        </div>
        <p className='text'>
          Please complete the application below for Grant consideration!{" "}
          <span className='purple'>
            Learn more about the criteria used for selecting grants.
          </span>
        </p>
        <Form />
      </Container>
      <Footer />
    </div>
  );
}

export default Application;
