import styled from "styled-components";
import Header from "../../shared-components/Header";
// import BackButton from "../../shared-components/BackButton";
import FundedGrantImage from "./components/FundedGrantImage";
// import GrantDetails from "./components/GrantDetails";
// import SimilarGrants from "./components/SimilarGrants";
import Footer from "../../shared-components/Footer";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import rData from "../../../data.json";
// const { cards } = rData;

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
  }
`;

function FundedGrantDetails() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const { card: stateCard, from } = location.state || {};
  const { id } = useParams();

  // const currentCard = stateCard || cards.find((card) => card.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [grantsDetailedData, setGrantsDetailedData] = useState([]);

  useEffect(() => {
    const getGrantsDetailedData = async () => {
      try {
        const data = await fetch(
          `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
        );
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const response = await data.json();
        setGrantsDetailedData(response.grants);
        console.log("response.grants", response.grants);
      } catch (error) {
        console.error("Error fetching grants data:", error);
      }
    };
    getGrantsDetailedData();
  }, [id]);

  // ### Individual Grant
  // `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=67eda635-dd7c-4a85-ba85-58fb5648e963`

  // if (!currentCard) {
  //   return <div>Card not found</div>;
  // }

  // const similarGrants = cards.filter(
  //   (c) => c.category === currentCard.category && c.id !== currentCard.id
  // );

  //Turning from to boolean
  // const canGoBack = !!from;

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        {/* {canGoBack && (
          <BackButton
            onClick={() => {
              console.log("BackButton clicked");
              navigate(-1);
            }}
          />
        )} */}
        <FundedGrantImage />
        {/* <GrantDetails
          key={currentCard.id}
          category={currentCard.category}
          cardTitle={currentCard.fundTitle}
          fundingAmountFrom={currentCard.fundingAmountFrom}
          status={currentCard.status}
          description={currentCard.descriptionText}
          grantees={currentCard.grantees}
        /> */}
        {/* <SimilarGrants similarGrants={similarGrants} /> */}
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrantDetails;
