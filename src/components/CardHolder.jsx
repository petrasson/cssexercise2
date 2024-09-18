import { StyledCardHolder } from "./styles/CardHolder.styled";
import Card from "./Card";

function CardHolder({ cards }) {
  console.log("cards in cardholder", cards);
  return (
    <StyledCardHolder>
      {cards.map((card) => (
        <Card
          key={card.id}
          category={card.category}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          fundingAmountTo={card.fundingAmountTo}
          description={card.descriptionText}
          attendees={card.attendees}
        />
      ))}
    </StyledCardHolder>
  );
}

export default CardHolder;
