import styled from "styled-components";

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

  ._primary {
    color: var(--primary-text-color);
    background-color: var(--secondary-bg-color);
    padding: 10px 16px;
    margin-right: 36px;
    height: 44px;
  }

  ._primary.highlight {
    font-weight: 600;
  }

  ._primary:hover {
    color: var(--secondary-bg-color);
    background-color: var(--primary-text-color);
  }

  ._secondary {
    color: var(--accent-color);
    font-weight: 400;
    padding: 10px 14px;
    max-width: 240px;
  }

  ._secondary:hover {
    color: var(--primary-text-color);
    background-color: var(--btn-hover-color);
  }

  ._accent {
    color: var(--primary-text-color);
    background-color: var(--accent-color);
    padding: 10px 14px;
    height: 44px;
  }

  ._accent:hover {
    color: var(--accent-color);
    background-color: var(--primary-text-color);
  }

  /*********************************** WEB VERSION *********************************/
  /* 

  font-size: 16px;
  line-height: 24px;

}  */
`;
