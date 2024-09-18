import PropTypes from "prop-types";
import { StyledButton } from "./styles/Button.styled";

function Button({ type, text, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "accent", "text"]),
  onClick: PropTypes.func.isRequired,
};

export default Button;
