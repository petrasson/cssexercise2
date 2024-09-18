import PropTypes from "prop-types";
import { StyledSocialMedia } from "./styles/SocialMedia.styled";

function SocialMedia({ position }) {
  return (
    <StyledSocialMedia $position={position}>
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
    </StyledSocialMedia>
  );
}

SocialMedia.propTypes = {
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default SocialMedia;
