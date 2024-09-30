import styled from "styled-components";
import Header from "../../shared-components/Header";
import NavButton from "./components/NavButton";
import FundedGrantImage from "./components/FundedGrantImage";
//import Apply from "../../shared-components/Apply";
import Footer from "../../shared-components/Footer";
import CardDetailsHead from "./components/CardDetailsHead";

import { useLocation } from "react-router-dom";

//import rData from "../../../data.json";
//const { cards } = rData;
// console.log("funded!", cards);

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  p {
font-size: 16px;
}

   @media only screen and (width >= 1305px) {
    padding: 0 108px;

    
`;

function App() {
  const location = useLocation();
  const { card } = location.state || {};
  console.log("these are the cards", card);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <NavButton />
        <FundedGrantImage />
        <CardDetailsHead
          key={card.id}
          category={card.category}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          status={card.status}
          description={card.descriptionText}
          attendees={card.attendees}
        />
        {/* <CardDetailsText /> */}
        {/* <CardFundingTransactions /> reuse components in it*/}
        {/* <MoreGrants /> reuse components in it */}
        Funding transactions
      </Container>
      <Footer />
    </>
  );
}

export default App;
