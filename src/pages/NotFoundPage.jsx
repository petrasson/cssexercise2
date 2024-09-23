import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    padding: 40px;
  }
`;

const StyledLink = styled(Link)`
  color: var(--primary-text-color);
  background-color: var(--secondary-bg-color);
  padding: 10px 16px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    color: var(--secondary-bg-color);
    background-color: var(--primary-text-color);
  }
`;
const NotFoundPage = () => {
  return (
    <Error>
      <h1>404 - Page Not Found</h1>
      <StyledLink to='/'>Go Back Home</StyledLink>
    </Error>
  );
};

export default NotFoundPage;
