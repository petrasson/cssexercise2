import DiscoveryCard from '../../../shared-components/DiscoveryCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    padding: 25px 0;
    grid-template-columns: repeat(3, 1fr);
    justify-content: start;
  }
`;

function Expenses({ cards }) {
  if (!cards || cards.length === 0) {
    return <div>No expenses available</div>;
  }

  return (
    <CardWrapper>
      {cards.map((card) => (
        <DiscoveryCard
          key={card.id}
          status={card.status}
          cardTitle={card.title}
          fundingAmountFrom={card.amount}
          description={card.description}
        />
      ))}
    </CardWrapper>
  );
}

Expenses.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amountFrom: PropTypes.string.isRequired,
      amountTo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default Expenses;
