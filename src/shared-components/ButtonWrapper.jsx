import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  // color: var(--primary-text-color);
  // background-color: var(--secondary-bg-color);
  // padding: 10px 16px;
  // height: 44px;
  // border-radius: 10px;
  // font-size: 16px;
  text-decoration: none;
  // &:hover {
  //   color: var(--secondary-bg-color);
  //   background-color: var(--primary-text-color);
  }
`;

const NavButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 16px 0;
    gap: 20px;
    
  .content {
    background-color: var(--secondary-bg-color);
    border-radius: 30px;
    padding: 5px 10px 5px 5px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

  .button-image {
    margin-right: 10px;
    width: 30px;
    height: auto;
    margin: 0;
  }

  .content .button-name {
    margin: 0 10px;
    }
  }
`;

function ButtonWrapper({ content }) {
  return (
    <NavButtonWrapper>
      {content.map((c, index) => (
        <StyledLink key={c.id} to={`/grantee/${c.id}`}>
          <div key={index} className='content'>
            <img
              src={`/images/${c.id}.png`}
              alt='aria-hidden'
              className='button-image'
            />
            <p className='button-name'>{c.name}</p>
          </div>
        </StyledLink>
      ))}
    </NavButtonWrapper>
  );
}

export default ButtonWrapper;
