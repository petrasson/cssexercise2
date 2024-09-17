import styled from "styled-components";

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.variant === "top" &&
    `
      justify-content: center;
      gap: 32px;
      // min-width: 10px;
      align-items: center;
      margin: 5px 0;
      padding-top: 50px;
    `}

  ${(props) =>
    props.variant === "bottom" &&
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
   props.variant === "top" &&
   `
      display: none;
    `}

  ${(props) =>
    props.variant === "bottom" &&
    `
      display: flex;
      flex-direction: row;  
      align-items: center;
      padding: 0;
    `}
  `;
