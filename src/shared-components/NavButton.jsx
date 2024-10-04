import styled from "styled-components";

const NavButtonWrapper = styled.div`
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
    align-item; center;
  }
  .image-fundedgrants {
    width: 15px;
  }
`;

function NavButton() {
  return (
    <NavButtonWrapper>
      <div className='nav-button-back'>
        <img
          src='/images/left-arrow.svg'
          alt='images of the logotypes chaos labs and dydx'
          className='image-fundedgrants'
        />
      </div>
    </NavButtonWrapper>
  );
}

export default NavButton;
