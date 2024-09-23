import Button from "./Button";
import SocialMedia from "../pages/FundedGrants/components/SocialMedia";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  margin: 0 auto;
  background-color: ${(props) =>
    props.$ismenuactive ? "var(--secondary-bg-color)" : "transparent"};

  .image-logotype-dydx-{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  
  .top-nav li {
    &:hover {
      font-weight: 900;
    }
  }
  
  .image-logotype-dydx {
    height: 60px;
    width: auto;
  }
  
  .top-nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .top-nav-wrapper {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 90px;
    left: 0;
    font-size: 23px;
    height: 100%;
    z-index: 6;
    background-color: var(--secondary-bg-color);

  }
     .top-nav-wrapper.active{
     display: flex;
     }
  
  .top-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0 30px;
    margin: 0 0 50px;
    width: 100%;
    font-family: "Space Mono", sans-serif;
  }
  
  .top-nav li {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    list-style-type: none;
    font-size: 20px;
  }
  
  .top-nav a {
    display: block;
    text-decoration: none;
    color: var(--primary-text-color);
  }
  
  .btn-wrapper {
    display: flex;
    flex-direction: row;
  }
  
  .hamburger-btn,
  .close-btn {
    color: var(--primary-text-color);
    margin-left: 20px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  .hamburger-btn,
    .close-btn {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
    }

  @media only screen and (width >= 1305px) {
    /********** TOP-SECTION ************/
  
    {
      display: flex;
      width: 100%;
      max-width: 1700px;
      padding: 24px 32px;
      margin: 0 auto;
    }
  
    .image-logotype-dydx {
      height: 72px;
      width: auto;
      cursor: pointer;
    }
  
    .top-nav-container {
      flex-direction: row;
    }
  
    .top-nav-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: static;
      padding: 10px;
      margin-right: 20px;
      background-color: transparent;
    }
  
    .top-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: auto;
      margin: 0;
      padding:0;
    }
  
    .top-nav li {
      width: auto;
      font-size: 17px;
      text-align: left;
      padding: 5px 17px;
      margin: 0 20px;
    }
  
    .top-nav a {
      display: inline-block;
      border: none;
      color: var(--secondary-text-color);
    }
  
    .btn-wrapper {
      display: flex;
      flex-direction: row;
    }
  
   .hamburger-btn,
    .close-btn {
      display: none;
`;

function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1300 });
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    console.log(!isMenuActive);
  };

  const handleApply = () => {
    alert("you will now apply for a grant");
  };

  return (
    <HeaderWrapper $ismenuactive={isMenuActive}>
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
            {!isDesktop && isMenuActive && <SocialMedia position='top' />}
          </nav>
        </div>

        <div className='btn-wrapper'>
          <Button
            type='accent'
            text={isDesktop ? "Apply for grant" : "Apply"}
            onClick={handleApply}
          />

          {!isDesktop && (
            <button
              className={isMenuActive ? "close-btn" : "hamburger-btn"}
              aria-label={isMenuActive ? "Close nav" : "Open nav"}
              onClick={toggleMenu}
            >
              <i
                className={`fa-solid ${isMenuActive ? "fa-xmark" : "fa-bars"}`}
                aria-hidden='true'
              ></i>
            </button>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
}
export default Header;
