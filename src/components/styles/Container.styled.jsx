import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  padding: 0 24px;
  border: solid red 1px;

  &._discover {
    max-width: 1100px;
  }

   @media only screen and (width >= 1305px) {

    padding: 0 108px;
`;
