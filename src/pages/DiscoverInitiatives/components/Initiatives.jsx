import DiscoveryCard from "../../../shared-components/DiscoveryCard";
import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .error-message {
    color: red;
  }

  /*********************************** TABLET VERSION *********************************/

  @media only screen and (width >= 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /*********************************** WEB VERSION *********************************/

  @media only screen and (width >= 1305px) {
    padding: 25px 0;
    grid-template-columns: repeat(3, 1fr);
    justify-content: start;
  }
`;

function Initiatives({ cards }) {
  if (!cards) {
    return null;
  }

  return (
    <CardWrapper>
      {cards.length === 0 ? (
        <div className='error-message'>No initiatives available</div>
      ) : (
        cards.map((card) => (
          <DiscoveryCard
            key={card.id}
            status={card.status}
            cardTitle={card.title}
            fundingAmountFrom={card.amountFrom}
            fundingAmountTo={card.amountTo}
            description={card.description}
          />
        ))
      )}
    </CardWrapper>
  );
}

export default Initiatives;
