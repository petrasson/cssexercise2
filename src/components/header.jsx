import Button from "./button";
import SocialMedia from "./SocialMedia";
import { StyledHeader } from "./styles/header.styled";

export default function Header() {
  const handleApply = () => {
    alert(" you will now apply for a grant");
  };

  return (
    <StyledHeader>
      <img
        src='images/dydXLogotypeBig.svg'
        alt='Dydx logotype'
        className='image-logotype-dydx'
      />
      <div className='top-nav-container'>
        <nav className='top-nav-wrapper'>
          <ul className='top-nav'>
            <li>
              <a href='/discover.html'>Discover initiatives</a>
            </li>
            <li className='highlight'>
              <a href='index.html'>Funded grants</a>
            </li>
            <li>
              <a href='#'>Program expenses</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
          </ul>
          <SocialMedia variant='top' />
        </nav>
        <div className='btn-wrapper'>
          <Button
            className='button {$_accent}'
            id='apply'
            type='accent'
            text='Apply for grant'
            onClick={handleApply}
          />
          <button className='hamburger-btn' aria-label='Open-nav'>
            <i className='fa-solid fa-bars' aria-hidden='true'></i>
          </button>
          <button className='close-btn' aria-label='Close-nav'>
            <i className='fa-solid fa-xmark' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </StyledHeader>
  );
}
