import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleWrapper = styled.div`
  .toggle-wrapper {
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    color: var(--secondary-text-color);
    align-items: center;
    cursor: pointer;
  }

  #toggle {
    appearance: none;
    position: relative;
    width: 50px;
    height: 20px;
    border-radius: 25px;
    background-color: var(--accent-color);
    transition: background 0.5s;
    cursor: pointer;
  }

  #toggle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translate(0, -50%);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: var(--primary-text-color);
    transition: left 0.3s;
  }

  #toggle:checked {
    background-color: var(--primary-text-color);
  }

  #toggle:checked::after {
    left: -3px;
    background-color: var(--primary-text-color);
  }

  .toggle-wrapper .toggle-text {
    padding-left: 27px;
    font-size: 16px;
  }
`;

function Toggle({ onClick }) {
  return (
    <ToggleWrapper onClick={onClick}>
      <div className='toggle-wrapper'>
        <input
          type='checkbox'
          id='toggle'
          aria-label='Show only completed'
          onClick={onClick}
        />
        <label htmlFor='toggle' className='toggle-text'>
          Show only completed
        </label>
      </div>
    </ToggleWrapper>
  );
}
Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
