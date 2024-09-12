import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  margin: 0 auto;
  max-width: 1440px;

  .footer-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 0;
    padding: 0;
    margin: 40px 0;
    min-width: 272px;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .footer-wrapper a {
    color: var(--secondary-text-color);
  }

  .bottom-nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    margin: 40px 0;
    padding: 0;
    list-style: none;
    color: var(--secondary-text-color);
    font-family: "Space Mono", sans-serif;
  }

  .bottom-nav li {
    cursor: pointer;
    padding: 10px 0;
  }

  .bottom-social-media-wrapper {
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 32px;
  }

  .external-link-symbol {
    width: 12px;
    height: 12px;
    margin-left: 8px;
  }

  @media only screen and (width >= 1305px) {
    padding: 80px 108px 40px;

    .footer-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 0;
      width: 100%;
    }

    .footer-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
    }

    .image-logotype-dydx-small {
      margin: 0;
    }

    .bottom-nav {
      display: flex;
      list-style: none;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      margin: 0 0 0 30px;
      color: var(--primary-bg-color);
      font-family: "Space Mono", sans-serif;
      font-size: 17px;
    }

    .bottom-nav li {
      margin: 0 12px;
    }

    .bottom-social-media-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className='footer-container'>
        <nav className='footer-wrapper'>
          {/* <img
      src='images/dydxLogotypeSmall.svg'
      alt='Dydx logotype'
      className='image-logotype-dydx-small'
    /> */}
          <ul className='bottom-nav'>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>Brand assets</a>
            </li>
            <li>
              <a href='#'>dYdX Foundation</a>
              {/* <img
          src='images/external-link-symbol.svg'
          aria-hidden='true'
          className='external-link-symbol'
        /> */}
            </li>
            <li className='bottom-nav-link'>
              <a href='#'>dYdX Trading</a>
              {/* <img
          src='images/external-link-symbol.svg'
          aria-hidden='true'
          className='external-link-symbol'
        /> */}
            </li>
          </ul>
        </nav>
        <div className='bottom-social-media-wrapper'>
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
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
