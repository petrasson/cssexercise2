// import { StyledCardHolder } from "./styles/CardHolder.styled";
import Card from "../../../shared-components/Card";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
  const [granteesData, setGranteesData] = useState([]);

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
    <CardWrapper>
      {cards.map((card) => {
        const GranteesId = card.grantees_ids;
        // Get Images of the grantees for this card
        const granteeImages = GranteesId.map((id) => {
          //find the IDs in granteesData that match each granteesIds in my array and return it's image.
          const grantee = granteesData.find((g) => g.id === id);
          return grantee ? grantee.image_url : null;
        });

        return (
          <StyledLink
            key={card.id}
            to={`/card/${card.id}`}
            state={{ from: location }}
          >
            <Card
              category={card.category}
              cardTitle={card.title}
              fundingAmountFrom={card.amountFrom}
              fundingAmountTo={card.amountTo}
              description={card.description}
              grantees={granteeImages}
            />
          </StyledLink>
        );
      })}
    </CardWrapper>
  );
}

CardHolder.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default CardHolder;
