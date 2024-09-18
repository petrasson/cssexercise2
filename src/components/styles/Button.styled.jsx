import styled, { css } from "styled-components";
const buttonStyles = {
  primary: css`
    color: var(--primary-text-color);
    background-color: var(--secondary-bg-color);
    padding: 10px 16px;
    margin-right: 36px;
    height: 44px;
    max-width: 50px;

    &:hover {
      color: var(--secondary-bg-color);
      background-color: var(--primary-text-color);
    }
  `,
  secondary: css`
    color: var(--accent-color);
    font-weight: 400;
    padding: 10px 14px;
    max-width: 240px;

    &:hover {
      color: var(--primary-text-color);
      background-color: var(--btn-hover-color);
    }
  `,
  accent: css`
    color: var(--primary-text-color);
    background-color: var(--accent-color);
    padding: 10px 14px;
    height: 44px;

    &:hover {
      color: var(--accent-color);
      background-color: var(--primary-text-color);
    }
  `,
  text: css`
    min-width: 150px;
    position: relative;
    z-index: 4;
    border: none;
    color: var(--primary-text-color);
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;
  `,
};

export const StyledButton = styled.button`
  font-weight: 500;
  font-family: "Cirkular Std", sans-serif;
  line-height: 20px;
  font-size: 14px;
  white-space: nowrap;
  border: 0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 44px;
  cursor: pointer;

  ${(props) => buttonStyles[props.type || "primary"]}
`;
