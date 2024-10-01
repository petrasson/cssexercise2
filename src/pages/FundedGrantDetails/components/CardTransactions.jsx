import PropTypes from "prop-types";
import styled from "styled-components";

const CardTransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  border: solid var(--border-color);
  background-color: var(--secondary-bg-color);
  height: 480px;
  width: 100%;
  padding: 24px;
  text-align: left;
  position: relative;
  flex: 1;
  margin: 10px 0;

  .card-wrapper-text {
    display: flex;
    flex-direction: column;
  }

  .sub-title {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 16px;
    margin: 8px 0;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0;
  }

  .card-text {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
  }

  @media only screen and (width >= 1305px) {
    flex-direction: row;
    .card-title {
      font-size: 24px;
    }
  }
`;

function CardTransaction({
  status,
  cardTitle,
  fundingAmountFrom,
  fundingAmountTo,
  description,
}) {
  return (
    <CardTransactionWrapper>
      <div className='card-wrapper-text'>
        <p className='card-title'>{cardTitle}</p>
        <p className='card-text'>{description}</p>
        <p className='sub-title'>
          Funding amount: {fundingAmountFrom}-{fundingAmountTo}
        </p>
      </div>
    </CardTransactionWrapper>
  );
}

CardTransaction.propTypes = {
  status: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  fundingAmountFrom: PropTypes.string.isRequired,
  fundingAmountTo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CardTransaction;
