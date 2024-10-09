import Header from "../../shared-components/Header";
import CardFilter from "./components/CardFilter";
import Apply from "../../shared-components/Apply";
import Footer from "../../shared-components/Footer";
import styled from "styled-components";
import HeadTitle from "../../shared-components/HeadTitle";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  padding: 0 24px;
  width: 100%;

  .space {
    padding: 80px 0 40px;
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

function FundedGrants() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <div className='space'>
          <HeadTitle text='Funded Grants' />
        </div>
        <CardFilter />
        <Apply />
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrants;
