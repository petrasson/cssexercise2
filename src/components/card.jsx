import PropTypes from "prop-types";
import { StyledCard } from "./styles/Card.styled";

function Card({
  cardTitle,
  fundingAmountFrom,
  fundingAmountTo,
  description,
  attendees,
}) {
  return (
    <StyledCard>
      <p className='card-title'>{cardTitle}</p>
      <p className='sub-title'>
        Funding amount: {fundingAmountFrom}-{fundingAmountTo}
      </p>
      <p className='card-text'>{description}</p>
      <div className='avatar-container'>{attendees}</div>
    </StyledCard>
  );
}

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired, // cardTitle is required and should be a string
  fundingAmountFrom: PropTypes.string.isRequired, // fundingAmountFrom is required and should be a number
  fundingAmountTo: PropTypes.string.isRequired, // fundingAmountTo is required and should be a number
  description: PropTypes.string.isRequired, // description is required and should be a string
  attendees: PropTypes.oneOfType([
    // attendees can be a string, number, or array
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};
export default Card;
