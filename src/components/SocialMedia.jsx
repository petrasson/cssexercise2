import PropTypes from "prop-types";
import { StyledSocialMedia } from "./styles/SocialMedia.styled";

function SocialMedia({ type }) {
  return (
    <StyledSocialMedia type={type}>
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
  type: PropTypes.oneOf(["top", "bottom"]),
};

export default SocialMedia;
