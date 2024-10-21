import styled from "styled-components";
import PropTypes from "prop-types";

const BackButtonWrapper = styled.div`
  position: relative;

  .nav-button-back {
    background: var(--secondary-bg-color);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 83px;
    left: -91px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer: 
  }
  .arrow {
    width: 15px;
  }
`;

function BackButton({ onClick }) {
  return (
    <BackButtonWrapper onClick={onClick}>
      <div className='nav-button-back'>
        <img src='/images/left-arrow.svg' alt='Back arrow' className='arrow' />
      </div>
    </BackButtonWrapper>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
