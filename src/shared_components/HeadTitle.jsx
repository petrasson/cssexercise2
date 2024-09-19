import styled from "styled-components";

const HeadTitleWrapper = styled.div`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 40px;

  @media only screen and (width >= 1305px) {
    line-height: 72px;
    margin: 80px 0 40px;
  }
`;

function HeadTitle({ text }) {
  return <HeadTitleWrapper>{text}</HeadTitleWrapper>;
}

export default HeadTitle;
