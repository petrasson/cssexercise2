import PropTypes from "prop-types";
import { StyledButton } from "./styles/Button.styled";

function Button({ id = "default-button-id", text, type = "primary", onClick }) {
  return (
    <StyledButton id={id} className={`button _${type}`} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

/**to provide warnings if the wrong type is passed. **/

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "accent"]),
  onClick: PropTypes.func.isRequired,
};

export default Button;
