import styled from "styled-components";

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
  }
  .arrow {
    width: 15px;
  }
`;

function BackButton() {
  return (
    <BackButtonWrapper>
      <div className='nav-button-back'>
        <img src='/images/left-arrow.svg' alt='Back arrow' className='arrow' />
      </div>
    </BackButtonWrapper>
  );
}

export default BackButton;
