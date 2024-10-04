import styled from "styled-components";
import Header from "../../shared-components/Header";
import ButtonWrapper from "../../shared-components/ButtonWrapper";
import BackButton from "../../shared-components/BackButton";
// import GrantDetails from "./components/GrantDetails";
// import SimilarGrants from "./components/SimilarGrants";
import Footer from "../../shared-components/Footer";
import HeadTitle from "../../shared-components/HeadTitle";
// import { useEffect } from "react";

// import { Link, useParams, useLocation } from "react-router-dom";

// import rData from "../../../data.json";
// const { cards } = rData;

const SocialMedia = ["Twitter", "LinkedIn", "Github", "Websites"];

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;

  p {
    font-size: 16px;
  }

  img {
    width: 270px;
    margin-top: 60px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .grant-text {
      font-size: 16px;
      line-height: 24px;
      color: var(--secondary-text-color);
      margin-bottom: 50px;
      text-align: left;
      width: 100%; 
  }

.link-wrapper {
 margin-right: auto;
}


@media only screen and (width >= 1305px) {
    padding: 0 108px;
`;

function Grantee() {
  // const location = useLocation();
  // const { card: stateCard } = location.state || {};
  // const { id } = useParams(); // Extract the card id from the URL
  // const card = stateCard || cards.find((card) => card.id === id);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [id]);

  // if (!card) {
  //   return <div>Card not found</div>;
  // }
  // const similarGrants = cards.filter(
  //   (c) => c.category === card.category && c.id !== card.id
  // );

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        {/* <Link to='/funded-grants'> */}
        <BackButton />
        {/* </Link> */}
        <img src='/images/grantee.png' alt='image of Helga, attendee' />
        <HeadTitle text='Jane Cooper' />
        <div className='text-wrapper'>
          <h3 className='sub-title'>About</h3>
          <p className='grant-text'>
            For athletes, high altitude produces two contradictory effects on
            performance. For explosive events (sprints up to 400 metres, long
            jump, triple jump) the reduction in atmospheric pressure means there
            is less resistance from the atmosphere and the athlete's performance
            will generally be better at high altitude.
          </p>
          <h3 className='sub-title'>Links</h3>
          <div className='link-wrapper'>
            <ButtonWrapper content={SocialMedia} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Grantee;

{
  /* <GrantDetails
          key={card.id}
          category={card.category}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          status={card.status}
          description={card.descriptionText}
          attendees={card.attendees}
        />
        <SimilarGrants similarGrants={similarGrants} /> */
}
