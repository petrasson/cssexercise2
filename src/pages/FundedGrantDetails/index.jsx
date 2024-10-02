import styled from "styled-components";
import Header from "../../shared-components/Header";
import NavButton from "./components/NavButton";
import FundedGrantImage from "./components/FundedGrantImage";
import GrantDetails from "./components/GrantDetails";
import SimilarGrants from "./components/SimilarGrants";
import Footer from "../../shared-components/Footer";
import { useEffect } from "react";

import { Link, useParams, useLocation } from "react-router-dom";

import rData from "../../../data.json";
const { cards } = rData;

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
  const { card: stateCard } = location.state || {};
  const { id } = useParams(); // Extract the card id from the URL
  const card = stateCard || cards.find((card) => card.id === id);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [id]);

  if (!card) {
    return <div>Card not found</div>;
  }
  const similarCards = cards.filter(
    (c) => c.category === card.category && c.id !== card.id
  );

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <Link to='/funded-grants'>
          <NavButton />
        </Link>
        <FundedGrantImage />
        <GrantDetails
          key={card.id}
          category={card.category}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          status={card.status}
          description={card.descriptionText}
          attendees={card.attendees}
        />
        <SimilarGrants similarCards={similarCards} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
