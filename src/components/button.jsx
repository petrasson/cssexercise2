import PropTypes from "prop-types";
import { StyledButton } from "./styles/Button.styled";

function Button({ type, text, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

/**to provide warnings if the wrong type is passed. **/

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "accent", "text"]),
  onClick: PropTypes.func.isRequired,
};

export default Button;
