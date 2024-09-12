import styled from "styled-components";

export const StyledFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 0;
    margin: 0;
    overflow-x: auto;
    color: var(--secondary-text-color);
    position: relative;
    scrollbar-width: none;
  }

  li {
    list-style-type: none;
  }

  .menu-filter {
    min-width: 118px;
    position: relative;
    z-index: 4;
    border: none;
    color: var(--primary-text-color);
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;

    &._discover {
      min-width: 100px;
    }
  }

  @media only screen and (width >= 1305px) {
      display: flex;
      padding: 0;
      width: auto;
      gap: 15px;
      font-size: 16px;
      line-height: 24px; 
  }
`;
