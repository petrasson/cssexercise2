import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
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
  overflow: hidden;
  flex: 1;

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
    margin: 25px 0;
  }

  .avatar-container {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 8px;
    left: 26px;
    margin: 0;
    padding: 0;
  }

  .avatar-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .image-avatar-wrapper {
    margin: 0 -9px;
  }

  .purple-circle {
    background-color: var(--accent-color);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px var(--secondary-bg-color);
  }

  .attendee-number {
    font-size: 12px;
  }

  @media only screen and (width >= 1305px) {
    .card-title {
      font-size: 24px;
    }
  }
`;

function Card({
  category,
  cardTitle,
  fundingAmountFrom,
  fundingAmountTo,
  description,
  attendees,
}) {
  return (
    <CardWrapper>
      <p className='card-category'>{category}</p>
      <p className='card-title'>{cardTitle}</p>
      <p className='sub-title'>
        Funding amount: {fundingAmountFrom}-{fundingAmountTo}
      </p>
      <p className='card-text'>{description}</p>

      <div className='avatar-container'>
        {attendees.map((attendee, index) => (
          <img
            key={index}
            src={`/images/${attendee}.png`}
            alt={attendee}
            className='avatar-image'
          />
        ))}
      </div>
    </CardWrapper>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  fundingAmountFrom: PropTypes.string.isRequired,
  fundingAmountTo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attendees: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};
export default Card;
