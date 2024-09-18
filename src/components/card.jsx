import PropTypes from "prop-types";
import { StyledCard } from "./styles/Card.styled";

function Card({
  category,
  cardTitle,
  fundingAmountFrom,
  fundingAmountTo,
  description,
  attendees,
}) {
  return (
    <StyledCard>
      <p className='card-category'>{category}</p>
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
  category: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  fundingAmountFrom: PropTypes.string.isRequired,
  fundingAmountTo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attendees: PropTypes.oneOfType([
    // attendees can be a string, number, or array
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};
export default Card;
