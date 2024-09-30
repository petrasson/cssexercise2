import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { clsx } from "clsx";

const SocialMediaWrapper = styled.div`
  display: none;
  flex-direction: row;
  gap: 32px;

  &.visible {
    display: flex;

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
    `}

  .social-media-symbol {
    display: flex;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

function SocialMedia({ isMenuActive, isDesktop, position }) {
  return (
    <SocialMediaWrapper
      $position={position}
      className={clsx({
        visible:
          position === "top"
            ? !isDesktop && isMenuActive
            : position === "bottom",
      })}
    >
      <img
        src='/images/twitter-symbol.svg'
        alt='twitter-symbol'
        className='social-media-symbol'
      />
      <img
        src='/images/discord-symbol.svg'
        alt='twitter-symbol'
        className='social-media-symbol'
      />
    </SocialMediaWrapper>
  );
}

SocialMedia.propTypes = {
  position: PropTypes.oneOf(["top", "bottom"]),
  isMenuActive: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default SocialMedia;
