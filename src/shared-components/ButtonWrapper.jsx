import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaLink, FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa";

const StyledLink = styled(Link)`
  color: var(--primary-text-color);
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

    .link {
      text-decoration: none;
      color: var(--primary-text-color);
    }
    
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: 10px;
      font-size: 16px;
      background-color: var(--secondary-bg-color);
      border-radius: 30px;
    }

    .button-image {
      margin-right: 10px;
      width: 40px;
      height: auto;
      margin: 0;
    }

    .content .button-name {
      margin: 0 10px;
    }
  }
`;

function ButtonWrapper({ items }) {
  const location = useLocation();
  const iconMapping = {
    Twitter: <FaTwitter fontSize='23px' />,
    LinkedIn: <FaLinkedin fontSize='23px' />,
    Github: <FaGithub fontSize='23px' />,
    Website: <FaLink fontSize='23px' />,
  };

  return (
    <NavButtonWrapper>
      {items.map((item, index) => {
        const isExternalLink = item.link.startsWith("http");
        return isExternalLink ? (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            <div className='content'>
              {item.text && iconMapping[item.text]}
              <p className='button-name'>{item.text}</p>
            </div>
          </a>
        ) : (
          <StyledLink
            key={index}
            to={item.link}
            state={{ from: location }}
            className='link'
          >
            <div className='content'>
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || ""}
                  className='button-image'
                />
              )}
              <p className='button-name'>{item.text}</p>
            </div>
          </StyledLink>
        );
      })}
    </NavButtonWrapper>
  );
}

export default ButtonWrapper;
