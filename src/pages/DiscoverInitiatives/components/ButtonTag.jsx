import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  text-align: center;
  border-radius: 16px;
  border: solid var(--border-color);
  background-color: var(--secondary-bg-color);
  height: 480px;
  width: 100%;
  padding: 24px;

  @media only screen and (width >= 1305px) {
    .card-title {
      font-size: 24px;
    }
  }
`;

function ButtonTag({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

export default ButtonTag;
