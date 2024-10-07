import styled from "styled-components";
import Header from "../../shared-components/Header";
import BackButton from "../../shared-components/BackButton";
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

function FundedGrantDetails() {
  const location = useLocation();
  const { card: stateCard } = location.state || {};
  const { id } = useParams();
  const card = stateCard || cards.find((card) => card.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!card) {
    return <div>Card not found</div>;
  }

  const similarGrants = cards.filter(
    (c) => c.category === card.category && c.id !== card.id
  );

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        <Link to='/funded-grants'>
          <BackButton />
        </Link>
        <FundedGrantImage />
        <GrantDetails
          key={card.id}
          category={card.category}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          status={card.status}
          description={card.descriptionText}
          grantees={card.grantees}
        />
        <SimilarGrants similarGrants={similarGrants} />
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrantDetails;
