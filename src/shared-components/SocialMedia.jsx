import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const SocialMediaWrapper = styled.div`
  display: none;
  flex-direction: row;
  gap: 32px;
  cursor: pointer;

  &.visible {
    display: flex;

    ${(props) =>
      props.$position === 'top' &&
      css`
        justify-content: center;
        align-items: center;
        margin: 5px 0;
        padding-top: 50px;

        @media (width >= 1024px) {
          display: none;
        }
      `}

    ${(props) =>
      props.$position === 'bottom' &&
      css`
        align-items: center;
      `}
  }
`;

function SocialMedia({ isMenuActive, isDesktop, position }) {
  return (
    <SocialMediaWrapper
      $position={position}
      className={clsx({
        visible:
          position === 'top'
            ? !isDesktop && isMenuActive
            : position === 'bottom',
      })}
    >
      <FaTwitter color="var(--secondary-text-color)" fontSize="32px" />
      <FaDiscord color="var(--secondary-text-color)" fontSize="32px" />
    </SocialMediaWrapper>
  );
}

SocialMedia.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  isMenuActive: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default SocialMedia;
