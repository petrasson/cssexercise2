import styled from "styled-components";

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.type === "top" &&
    `
      justify-content: center;
      gap: 32px;
      // min-width: 10px;
      align-items: center;
      margin: 5px 0;
      padding-top: 50px;
    `}

  ${(props) =>
    props.type === "bottom" &&
    `
      align-content: center;
      gap: 32px;
     
    `}


.social-media-symbol {
  display: flex;
  width: 32px;
  height: 32px;
  cursor: pointer;
    

}
  @media only screen and (width >= 1305px) {

 ${(props) =>
   props.type === "top" &&
   `
      display: none;
    `}

  ${(props) =>
    props.type === "bottom" &&
    `
      display: flex;
      flex-direction: row;  
      align-items: center;
      padding: 0;
    `}
  `;
