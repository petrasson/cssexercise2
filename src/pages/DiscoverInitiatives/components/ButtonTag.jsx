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
      props.status === "Funded" &&
      css`
        background-color: var(--primary-bg-color);
      `
    );
  }}

  ${(props) => {
    return (
      props.status === "Open" &&
      css`
        background-color: var(--accent-color);
      `
    );
  }}

  ${(props) => {
    return (
      props.status === "Completed" &&
      css`
        background-color: var(--btn-completed);
        ::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          background-image: url("/images/arrow-right.svg");
          width: 20px;
          height: 20px;
          background-color: red;
          z-index: 3;
          background-repeat: no-repeat;
          pointer-events: none;
        }
      `
    );
  }}


  @media only screen and (min-width: 1305px) {
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
