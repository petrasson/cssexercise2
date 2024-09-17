import Button from "./button";
import SocialMedia from "./SocialMedia";
import { useMediaQuery } from "react-responsive";
import { StyledHeader } from "./styles/header.styled";
import React, { useState } from "react";

export default function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1023 });
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    console.log(!isMenuActive);
  };

  const handleApply = () => {
    alert("you will now apply for a grant");
  };

  return (
    <StyledHeader isMenuActive={isMenuActive}>
      <img
        src='images/dydXLogotypeBig.svg'
        alt='Dydx logotype'
        className='image-logotype-dydx'
      />
      <div className='top-nav-container'>
        <div className={`top-nav-wrapper ${isMenuActive ? "active" : ""}`}>
          <nav>
            <ul className='top-nav'>
              <li>
                <a href='/discover.html'>Discover initiatives</a>
              </li>
              <li>
                <a href='/funded-grants.html'>Funded grants</a>
              </li>
              <li>
                <a href='/program-expenses.html'>Program expenses</a>
              </li>
              <li>
                <a href='/blog.html'>Blog</a>
              </li>
              <li>
                <a href='/faq.html'>FAQ</a>
              </li>
            </ul>
            <SocialMedia variant='top' />
          </nav>
        </div>

        <div className='btn-wrapper'>
          <Button
            className='button _accent'
            id='apply'
            type='accent'
            text={isDesktop ? "Apply for grant" : "Apply"}
            onClick={handleApply}
          />

          {!isMenuActive ? (
            <button
              className='hamburger-btn'
              aria-label='Open-nav'
              onClick={toggleMenu}
            >
              <i className='fa-solid fa-bars' aria-hidden='true'></i>
            </button>
          ) : (
            <button
              className='close-btn'
              aria-label='Close-nav'
              onClick={toggleMenu}
            >
              <i className='fa-solid fa-xmark' aria-hidden='true'></i>
            </button>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}
