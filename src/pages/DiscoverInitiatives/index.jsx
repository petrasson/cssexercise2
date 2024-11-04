import styled from "styled-components";
import Header from "../../shared-components/Header";
import HeadTitle from "../../shared-components/HeadTitle";
import DiscoverFilter from "./components/DiscoverFilter";
import Footer from "../../shared-components/Footer";
import { Suspense } from "react";
import LottieAnimation from "./../../shared-components/LottieAnimation";

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

  .text {
    font-size: 16px;
    margin: 0 0 45px 0;
    color: var(--secondary-text-color);
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

function DiscoverInitiatives() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <div className='space'>
          <HeadTitle text='Discover Initiatives' />
        </div>
        <p className='text'>
          The list below includes initial ideas that we think could make
          excellent Grants. This is a living list that will continue to update
          as ideas popup.
        </p>
        <Suspense fallback={<LottieAnimation />}>
          <DiscoverFilter />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default DiscoverInitiatives;
