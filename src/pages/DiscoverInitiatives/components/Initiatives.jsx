import InitiativeCard from "./InitiativeCard";
import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
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

function Initiatives({ cards }) {
  if (!cards || cards.length === 0) {
    return <div>No initiatives available</div>;
  }

  return (
    <CardWrapper>
      {cards.map((card) => (
        <InitiativeCard
          key={card.id}
          category={card.category}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          fundingAmountTo={card.fundingAmountTo}
          description={card.descriptionText}
        />
      ))}
    </CardWrapper>
  );
}

export default Initiatives;
