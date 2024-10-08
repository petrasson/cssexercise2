import styled from "styled-components";
import Header from "../../shared-components/Header";
import ButtonWrapper from "../../shared-components/ButtonWrapper";
import BackButton from "../../shared-components/BackButton";
import Footer from "../../shared-components/Footer";
import HeadTitle from "../../shared-components/HeadTitle";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import Card from "../../pages/FundedGrants/components/Card";

import rData from "../../../data.json";
const { cards } = rData;
import rUserData from "../../../userdata.json";
const { userdata } = rUserData;

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
    margin: 60px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;

    .grant-text {
      font-size: 16px;
      line-height: 24px;
      color: var(--secondary-text-color);
      margin-bottom: 30px;
      text-align: left;
      width: 100%;
    }
  }

  .link-wrapper {
    margin-right: auto;
  }

  .projects-text {
    cursor: pointer;
    margin: 120px 0 50px 0;
  }

  .card-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
      // justify-content: center;
    justify-content: start;
    text-align: left;
    width: 100%;
  }

  /*********************************** WEB VERSION *********************************/

  @media only screen and (width >= 1305px) {

  .card-wrapper {
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

function Grantee() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const userInformation = userdata.find((user) => user.id === id);

  if (!userInformation) {
    return <p>User not found</p>;
  }
  const usersCards = cards.filter((card) => card.grantees.includes(id));
  const canGoBack = location.state && location.state.from;

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        {canGoBack && (
          <BackButton
            onClick={() => {
              console.log("BackButton clicked");
              navigate(-1);
            }}
          />
        )}
        <img src={`/images/${id}.svg`} alt='picture of user' />
        <HeadTitle text={userInformation.name} />
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
            <ButtonWrapper items={userInformation.links} location={location} />
          </div>
        </div>
        <h1 className='projects-text'>Projects</h1>
        <div className='card-wrapper'>
          {usersCards.map((card) => (
            <StyledLink key={card.id} to={`/card/${card.id}`}>
              <Card
                key={card.id}
                category={card.category}
                cardTitle={card.fundTitle}
                fundingAmountFrom={card.fundingAmountFrom}
                fundingAmountTo={card.fundingAmountTo}
                description={card.descriptionText}
                grantees={card.grantees}
              />
            </StyledLink>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Grantee;
