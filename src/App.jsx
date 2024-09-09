import "./App.css";
import Header from "./ui/header";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="mid-container">
        <h1 className="title">Funded grants</h1>
        <div className="mid-wrapper">
          <div className="hero-row">
            <div className="filter-container">
              <button className="button _primary" id="all-funds">
                All
              </button>
              <menu className="filter-wrapper">
                <li>
                  <button
                    className="menu-filter"
                    data-filter="Technical/Tool Development"
                  >
                    Technical/Tool Development
                  </button>
                </li>
                <li>
                  <button className="menu-filter" data-filter="Governance">
                    Governance
                  </button>
                </li>
                <li>
                  <button
                    className="menu-filter"
                    data-filter="Growth / Marketing"
                  >
                    Growth/Marketing
                  </button>
                </li>
                <li>
                  <button className="menu-filter" data-filter="Analytics">
                    Analytics
                  </button>
                </li>
                <li>
                  <button
                    className="menu-filter"
                    data-filter="Third Party Provider"
                  >
                    Third party provider
                  </button>
                </li>
              </menu>
            </div>
          </div>
          <div className="toggle-wrapper">
            <input
              type="checkbox"
              id="toggle"
              aria-label="Show only completed"
            />
            <label htmlFor="toggle" className="toggle-text">
              Show only completed
            </label>
          </div>
        </div>
        <section className="card-grid-section"></section>
        <section className="apply-wrapper">
          <div className="apply-inner">
            <p className="apply-text">Have a project in mind?</p>
            <p className="apply-title">Let’s create something awesome.</p>
            <button className="button _secondary">
              Apply for grant
              <img
                src="images/arrowb-rigth.svg"
                aria-hidden="true"
                className="arrowb-right"
              />
            </button>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <nav className="footer-wrapper">
            <img
              src="images/dydxLogotypeSmall.svg"
              alt="Dydx logotype"
              className="image-logotype-dydx-small"
            />
            <ul className="bottom-nav">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Brand assets</a>
              </li>
              <li>
                <a href="#">dYdX Foundation</a>
                <img
                  src="images/external-link-symbol.svg"
                  aria-hidden="true"
                  className="external-link-symbol"
                />
              </li>
              <li className="bottom-nav-link">
                <a href="#">dYdX Trading</a>
                <img
                  src="images/external-link-symbol.svg"
                  aria-hidden="true"
                  className="external-link-symbol"
                />
              </li>
            </ul>
          </nav>
          <div className="bottom-social-media-wrapper">
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
        </div>
      </footer>
    </div>
  );
}

export default App;
