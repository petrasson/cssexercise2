import styled from "styled-components";
import Card from "../../../shared-components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

function SimilarGrants({ similarGrants }) {
  const [granteesData, setGranteesData] = useState([]);

  /*** FETCH USER DATA TO RENDER PARTICIPANTS IMAGES ***/

  useEffect(() => {
    const getGranteesData = async () => {
      try {
        const data = await fetch(
          "https://nextjs-test-beryl-gamma.vercel.app/api/grantees"
        );
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const response = await data.json();
        setGranteesData(response.grantees);
      } catch (error) {
        console.error("Error fetching grantees data:", error);
      }
    };
    getGranteesData();
  }, []);

  return (
    <SimilarGrantsWrapper>
      <h1>More grants like this</h1>
      <div className='link-wrapper'>
        <p className='similar-projects-text'>Similar projects</p>
        <img src='/images/arrow-right.svg' aria-hidden='true' />
      </div>
      <div className='similar-card-wrapper'>
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

SimilarGrants.propTypes = {
  similarGrants: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      cardTitle: PropTypes.string.isRequired,
      fundingAmountFrom: PropTypes.number.isRequired,
      fundingAmountTo: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      grantees_ids: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default SimilarGrants;
