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

  .card-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0;
  }

  .sub-title {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 14px;
    margin: 8px 0;
  }

  .card-text {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
  }

  .external-link-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 16px;
  }

  @media only screen and (width >= 1305px) {
    flex-direction: row;
    justify-content: space-between;

    .card-wrapper-text {
      width: 2700px;
    }

    .card-title {
      font-size: 20px;
    }

    .external-link-wrapper {
      justify-content: end;
    }

    .card-text {
      padding-right: 13px;
    }
  }
`;

function CardTransaction({ title, date, description, fundingAmount }) {
  return (
    <CardTransactionWrapper>
      <div className='card-wrapper-text'>
        <p className='card-title'>{title}</p>
        <p className='sub-title'> {date}</p>
        <p className='card-text'>{description}</p>
      </div>
      <div className='external-link-wrapper'>
        <p className='card-text'>{fundingAmount}</p>
        <img src='/images/external-link-symbol.svg' aria-hidden='true' />
      </div>
    </CardTransactionWrapper>
  );
}

CardTransaction.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fundingAmount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CardTransaction;
