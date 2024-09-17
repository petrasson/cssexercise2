import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  color: var(--secondary-text-color);
  position: relative;
  scrollbar-width: none;
  width: 100%;
  display: flex;
  scrollbar-width: none;

  :first-child {
    min-width: 200px;
  }

  li {
    list-style-type: none;
  }

  .menu-filter {
    min-width: 150px;
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
    overflow-x: hidden;
    width: auto;
    gap: 15px;
    font-size: 16px;
    line-height: 24px;
  }
`;
