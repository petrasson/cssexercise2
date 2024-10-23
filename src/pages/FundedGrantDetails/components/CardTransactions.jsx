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
  padding: 16px 18px;
  text-align: left;
  position: relative;
  flex: 1;
  margin: 10px 0;

  .card-wrapper-text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .date {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 14px;
    margin: 8px 0;
  }

  .sub-title {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 14px;
    margin: 8px 0;
  }

  .description {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
  }

  .amount-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img {
      width: 18px;
      margin-left: 10px;
    }
  }

  /****************** WEB VIEW **********************/

  @media only screen and (width >= 1305px) {
    flex-direction: row;
    justify-content: space-between;
    .card-title {
      font-size: 20px;
    }

    .external-link-wrapper {
      justify-content: end;
    }

    .card-text {
      padding-right: 13px;
    }

    .card-wrapper-text {
      width: 2300px;
    }

    .amount-wrapper {
      justify-content: end;
    }
  }
`;

function CardTransaction({ title, date, amount, description }) {
  return (
    <CardTransactionWrapper>
      <div className='card-wrapper-text'>
        <p className='card-title'>{title}</p>
        <p className='date'>{date}</p>
        <p className='description'>{description}</p>
      </div>
      <div className='amount-wrapper'>
        <p className='amount'> {amount}</p>
        <img src='/images/external-link-grey.svg' aria-hidden='true' />
      </div>
    </CardTransactionWrapper>
  );
}

export default CardTransaction;
