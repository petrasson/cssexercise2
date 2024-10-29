import Header from "../../shared-components/Header";
import CardFilter from "./components/CardFilter";
import Apply from "../../shared-components/Apply";
import Footer from "../../shared-components/Footer";
import styled from "styled-components";
import HeadTitle from "../../shared-components/HeadTitle";
import { Suspense } from "react";
import LottieAnimation from "../../shared-components/LottieAnimation";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  min-height: 100vh;

  .space {
    padding: 90px 0 40px;
  }

  @media only screen and (width >= 1305pgit x) {
    padding: 0 108px;
  }
`;

function FundedGrants() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <Suspense fallback={<LottieAnimation />}>
          <div className='space'>
            <HeadTitle text='Funded Grants' />
          </div>
          <CardFilter />
          <Apply />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrants;
