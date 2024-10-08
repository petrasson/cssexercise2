import styled from "styled-components";
import Card from "../../../shared-components/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const SimilarGrantsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  .link-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .similar-projects-text {
      color: var(--accent-color);
      padding-right: 10px;
     cursor: pointer;
    }
  }

  .similar-card-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
    justify-content: center;
  }

 @media only screen and (width >= 1305px) {
    
 .similar-card-wrapper {
    grid-template-columns: repeat(2, 1fr);
`;

function SimilarGrants({ similarGrants }) {
  const [showAll, setShowAll] = useState(false);
  const reducedSimilarGrants = similarGrants.slice(0, 2);
  const handleViewAllClick = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <SimilarGrantsWrapper>
      <h1>More grants like this</h1>

      <div className='link-wrapper'>
        <p className='similar-projects-text' onClick={handleViewAllClick}>
          {showAll ? "View less projects" : "View all similar projects"}
        </p>
        <img src='/images/arrow-right.svg' aria-hidden='true' />
      </div>
      <div className='similar-card-wrapper'>
        {(showAll ? similarGrants : reducedSimilarGrants).map((card) => (
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
    </SimilarGrantsWrapper>
  );
}

export default SimilarGrants;
