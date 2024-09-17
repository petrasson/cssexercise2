import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  margin: 0 auto;
  border: solid blue;

   background-color: ${(props) =>
     props.isMenuActive ? "var(--secondary-bg-color)" : "transparent"};

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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 95px;
    left: 0;
    font-size: 23px;
    height: 100%;
    z-index: 6;
    background-color: var(--secondary-bg-color);
   
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
  
  .hamburger-btn {
    display: flex;
    font-size: 18px;
  }
  
  .close-btn {
    display: block;
    background-color: var(--second-bg-color);
    font-size: 22px;
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
  
    .hamburger-btn {
      display: none;
    }
  




`;
