// import styled from "styled-components";
import { StyledFooter } from "./styles/Footer.styled";

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
