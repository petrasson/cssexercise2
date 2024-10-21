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
        padding-right: 30px;
        ::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          background-image: url("/images/check.svg");
          width: 20px;
          height: 20px;
          background-size: cover;
          z-index: 3;
          background-repeat: no-repeat;
          pointer-events: none;
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
  return <StyledButton status={status}>{status}</StyledButton>;
}

ButtonTag.propTypes = {
  status: PropTypes.oneOf(["Funded", "Completed", "Open"]).isRequired,
};

export default ButtonTag;
