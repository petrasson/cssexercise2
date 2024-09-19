import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  ${(props) =>
    props.$position === "top" &&
    css`
      justify-content: center;
      align-items: center;
      margin: 5px 0;
      padding-top: 50px;

      @media (width >= 1024px) {
        display: none;
      }
    `}

  ${(props) =>
    props.$position === "bottom" &&
    css`
      align-items: center;
      /* Additional styles for bottom position */

      @media (width >= 1023px) {
      }
    `}

  .social-media-symbol {
    display: flex;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

function SocialMedia({ position }) {
  return (
    <SocialMediaWrapper $position={position}>
      <img
        src='images/twitter-symbol.svg'
        alt='twitter-symbol'
        className='social-media-symbol'
      />
      <img
        src='images/discord-symbol.svg'
        alt='twitter-symbol'
        className='social-media-symbol'
      />
    </SocialMediaWrapper>
  );
}

SocialMedia.propTypes = {
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default SocialMedia;
