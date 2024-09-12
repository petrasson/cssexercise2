// import Card from "Card";
import { StyledProjects } from "./styles/Projects.styled";
import Card from "./card";
import rData from "../../data.json";

const { cards } = rData;
console.log("cards", cards);

console.log("card", cards[0].descriptionText);

function Projects() {
  return (
    <StyledProjects>
      {cards.map((card) => (
        <Card
          key={card.id}
          cardTitle={card.fundTitle}
          fundingAmountFrom={card.fundingAmountFrom}
          fundingAmountTo={card.fundingAmountTo}
          description={card.descriptionText}
          attendees={card.attendees}
        />
      ))}
    </StyledProjects>
  );
}

export default Projects;
