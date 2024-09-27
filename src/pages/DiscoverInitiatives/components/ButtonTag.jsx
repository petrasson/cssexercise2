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

  ${(props) =>
    true &&
    `
      background-color: var(--primary-bg-color);
    `}

  ${(props) =>
    true &&
    css`
      background-color: var(--btn-completed);

      // arrow after completed
      // ::after {
      //   content: "";
      //   position: absolute;
      //   top: 50%;
      //   right: 2px;
      //   background-image: url("../../images/rightarrow.svg");
      //   width: 20px;
      //   height: 20px;
      //   z-index: 2;
      //   background-repeat: no-repeat;
      //   pointer-events: none;
      // }
    `}

  ${(props) => {
    console.log(props);
    return (
      props.category === "Funded" &&
      css`
        background-color: var(--primary-bg-color);
      `
    );
  }}

  ${(props) => {
    console.log(props);
    return (
      props.category === "Open" &&
      css`
        background-color: var(--accent-color);
      `
    );
  }}

  ${(props) => {
    console.log(props);
    return (
      props.category === "Completed" &&
      css`
        background-color: var(--btn-completed);
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

function ButtonTag({ category }) {
  console.log("category", category);
  return <StyledButton category={category}>{category}</StyledButton>;
}

ButtonTag.propTypes = {
  category: PropTypes.oneOf(["funded", "completed", "open"]).isRequired,
};

export default ButtonTag;
