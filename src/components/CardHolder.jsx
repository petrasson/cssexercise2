// import Card from "Card";
import { StyledCardHolder } from "./styles/CardHolder.styled";
import Card from "./Card";
import rData from "../../data.json";

const { cards } = rData;
console.log("cards", cards);

function CardHolder() {
  console.log("projects", cards);
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
