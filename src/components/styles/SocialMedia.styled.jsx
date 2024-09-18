import styled, { css } from "styled-components";

const positionStyles = (position) => {
  switch (position) {
    case "top":
      return css`
        justify-content: center;
        gap: 32px;
        align-items: center;
        margin: 5px 0;
        padding-top: 50px;

        @media only screen and (min-width: 1305px) {
          display: none;
        }
      `;
    case "bottom":
      return css`
        align-content: center;
        gap: 32px;

        @media only screen and (min-width: 1305px) {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
        }
      `;
    default:
      return null;
  }
};

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => positionStyles(props.position)}
`;
