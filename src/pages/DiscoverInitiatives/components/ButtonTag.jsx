import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  border-radius: 30px;
  border: none;
  height: auto;
  padding: 0 10px;
  font-size: 12px;
  color: white;

  ${(props) => {
    return (
      props.status === "funded" &&
      css`
        background-color: var(--primary-bg-color);
      `
    );
  }}

  ${(props) => {
    return (
      props.status === "open" &&
      css`
        background-color: var(--accent-color);
      `
    );
  }}

  ${(props) => {
    return (
      props.status === "completed" &&
      css`
        background-color: var(--btn-completed);
        position: relative;
        padding: 0 30px 0 10px;

        .check-icon {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
        }
      `
    );
  }}  


  @media only screen and (width >= 1305px) {
    position: absolute;
    top: 16px;
    right: 16px;
    bottom: auto;
    left: auto;
  }
`;

function ButtonTag({ status }) {
  return (
    <StyledButton status={status}>
      {status}
      {status === "completed" && (
        <img src='/images/check.svg' alt='check icon' className='check-icon' />
      )}
    </StyledButton>
  );
}

ButtonTag.propTypes = {
  status: PropTypes.oneOf(["Funded", "Completed", "Open"]).isRequired,
};

export default ButtonTag;
