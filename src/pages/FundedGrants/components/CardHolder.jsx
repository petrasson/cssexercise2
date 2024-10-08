// import { StyledCardHolder } from "./styles/CardHolder.styled";
import Card from "../../../shared-components/Card";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const CardWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  justify-content: center;

  /*********************************** TABLET VERSION *********************************/

  @media only screen and (width >= 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /*********************************** WEB VERSION *********************************/

  @media only screen and (width >= 1305px) {
    padding: 80px 0;
    grid-template-columns: repeat(3, 1fr);
    justify-content: start;
  }
`;

function CardHolder({ cards }) {
  const location = useLocation();

  return (
    <CardWrapper>
      {cards.map((card) => (
        <>
          <StyledLink
            key={card.id}
            to={`/card/${card.id}`}
            state={{ card, from: location }}
          >
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
        </>
      ))}
    </CardWrapper>
  );
}

export default CardHolder;
