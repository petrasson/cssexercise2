import styled from 'styled-components';
import Card from '../../../shared-components/Card';
import { Link } from 'react-router-dom';

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
    }
  }
`;

function SimilarGrants({ similarGrants, granteesData }) {
  return (
    <SimilarGrantsWrapper>
      <h1>More grants like this</h1>
      <div className="link-wrapper">
        <p className="similar-projects-text">Similar projects</p>
        <img src="/images/arrow-right.svg" aria-hidden="true" />
      </div>
      <div className="similar-card-wrapper">
        {Array.isArray(similarGrants) && similarGrants.length > 0 ? (
          similarGrants.map((card) => {
            //array with granteesIds for each card
            const granteesId = card.grantees_ids;
            // map each Id and find the matching id in grantee
            const granteeImages = granteesId.map((id) => {
              const grantee = granteesData.find((g) => g.id === id);
              return grantee ? grantee.image_url : null;
            });

            return (
              <StyledLink key={card.id} to={`/card/${card.id}`}>
                <Card
                  key={card.id}
                  category={card.category}
                  cardTitle={card.title}
                  fundingAmountFrom={card.amountFrom}
                  fundingAmountTo={card.amountTo}
                  description={card.description}
                  grantees={granteeImages}
                />
              </StyledLink>
            );
          })
        ) : (
          <div>No similar grants available</div>
        )}
      </div>
    </SimilarGrantsWrapper>
  );
}

export default SimilarGrants;
