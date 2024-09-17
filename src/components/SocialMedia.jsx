import PropTypes from "prop-types";
import { StyledSocialMedia } from "./styles/SocialMedia.styled";

function SocialMedia({ variant = "top" }) {
  return (
    <StyledSocialMedia variant={variant}>
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

/**to provide warnings if the wrong type is passed. **/

SocialMedia.propTypes = {
  type: PropTypes.oneOf(["top", "bottom"]),
};

export default SocialMedia;
