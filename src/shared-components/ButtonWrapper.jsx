import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaLink, FaLinkedin } from 'react-icons/fa6';
import { FaGithub, FaTwitter } from 'react-icons/fa';

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
      padding: 5px 6px;
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

const granteeSocialMedia = [
  {
    name: 'Twitter',
    link: null,
    icon: <FaTwitter fontSize="23px" />,
  },
  {
    name: 'Website',
    link: null,
    icon: <FaLink fontSize="23px" />,
  },
  {
    name: 'LinkedIn',
    link: null,
    icon: <FaLinkedin fontSize="23px" />,
  },
  {
    name: 'Github',
    link: null,
    icon: <FaGithub fontSize="23px" />,
  },
];

function ButtonWrapper({ grantees, position }) {
  const location = useLocation();

  if (!grantees || grantees.length === 0) {
    return <p>No items available</p>;
  }

  const updatedSocialMedia = [...granteeSocialMedia];
  {
    position === 'external-links' &&
      grantees.forEach((grantee) => {
        if (grantee.includes('twitter')) {
          updatedSocialMedia.find((media) => media.name === 'Twitter').link =
            grantee;
        } else if (grantee.includes('linkedin')) {
          updatedSocialMedia.find((media) => media.name === 'LinkedIn').link =
            grantee;
        } else if (grantee.includes('github')) {
          updatedSocialMedia.find((media) => media.name === 'Github').link =
            grantee;
        } else {
          // If it's not social media, we assign it as a website
          updatedSocialMedia.find((media) => media.name === 'Website').link =
            grantee;
        }
      });
  }

  return (
    <NavButtonWrapper>
      {/* Conditional rendering based on position */}
      {position === 'external-links' &&
        updatedSocialMedia.map(
          (media, index) =>
            media.link && (
              <a
                key={index}
                href={
                  media.link.startsWith('http')
                    ? media.link
                    : `http://${media.link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="content">
                  {media.icon}
                  <p className="button-name">{media.name}</p>
                </div>
              </a>
            ),
        )}

      {position === 'link-to-profile' &&
        grantees.map((grantee, index) => (
          <StyledLink
            key={index}
            to={`/grantee/${grantee.id}`}
            state={{ from: location }}
            className="link"
          >
            <div className="content">
              {grantee.image_url && (
                <img
                  src={grantee.image_url}
                  alt={`Image of ${grantee.name || ''}`}
                  className="button-image"
                />
              )}
              <p className="button-name">{grantee.name}</p>
            </div>
          </StyledLink>
        ))}
    </NavButtonWrapper>
  );
}

export default ButtonWrapper;
