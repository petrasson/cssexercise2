import styled from "styled-components";
import Header from "../../shared-components/Header";
import HeadTitle from "../../shared-components/HeadTitle";
import DiscoverFilter from "./components/DiscoverFilter";
import Footer from "../../shared-components/Footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;

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

function DiscoverInitiatives() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <div className='space'>
          <HeadTitle text='Discover Initiatives' />
        </div>
        <p>
          The list below includes initial ideas that we think could make
          excellent Grants. This is a living list that will continue to update
          as ideas popup.
        </p>
        <DiscoverFilter />
      </Container>
      <Footer />
    </div>
  );
}

export default DiscoverInitiatives;
