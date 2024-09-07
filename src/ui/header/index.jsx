import clsx from "clsx";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isActive, changeActiveState] = useState(false);

  const toggleActive = () => {
    changeActiveState(!isActive);
    if (!isActive) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  };

  return (
    <header className="header">
      <img
        src="images/dydXLogotypeBig.svg"
        alt="Dydx logotype"
        className="image-logotype-dydx"
      />
      <div
        className={clsx("top-nav-container", {
          active: isActive,
        })}
      >
        <nav className="top-nav-wrapper">
          <ul className="top-nav">
            <li>
              <a href="#">Discover initiatives</a>
            </li>
            <li className="highlight">
              <a href="#">Funded grants</a>
            </li>
            <li>
              <a href="#">Program expenses</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>

          <div className="top-social-media-wrapper">
            <img
              src="images/twitter-symbol.svg"
              alt="twitter-symbol"
              className="social-media-symbol"
            />
            <img
              src="images/discord-symbol.svg"
              alt="twitter-symbol"
              className="social-media-symbol"
            />
          </div>
        </nav>
        <div className="btn-wrapper">
          <button className="button _accent" id="apply">
            Apply
          </button>
          <button
            onClick={toggleActive}
            className={clsx("hamburger-btn", {
              active: isActive,
            })}
            aria-label="Open-nav"
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
          <button
            onClick={toggleActive}
            className={clsx("close-btn", {
              active: isActive,
            })}
            aria-label="Close-nav"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
