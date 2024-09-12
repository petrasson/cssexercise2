import styled from "styled-components";

export const StyledProjects = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  justify-content: center;
  border: solid red;

  /*********************************** TABLET VERSION *********************************/

  @media only screen and (width >= 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /*********************************** WEB VERSION *********************************/

  @media only screen and (width >= 1305px) {
    padding: 80px 0;
    grid-template-columns: repeat(3, 1fr);
    justify-content: start;
  }
`;
