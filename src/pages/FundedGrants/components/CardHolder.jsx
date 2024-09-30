// import { StyledCardHolder } from "./styles/CardHolder.styled";
import Card from "./Card";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  return (
    <CardWrapper>
      {cards.map((card) => (
        <>
          <StyledLink key={card.id} to={`/card/${card.id}`} state={{ card }}>
            <Card
              key={card.id}
              category={card.category}
              cardTitle={card.fundTitle}
              fundingAmountFrom={card.fundingAmountFrom}
              fundingAmountTo={card.fundingAmountTo}
              description={card.descriptionText}
              attendees={card.attendees}
            />
          </StyledLink>
        </>
      ))}
    </CardWrapper>
  );
}

export default CardHolder;
