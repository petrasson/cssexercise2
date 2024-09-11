import Header from "./components/header";
import Filter from "./components/filter";
import Apply from "./components/apply";
import Button from "./components/button";
import Footer from "./components/footer";
import Projects from "./components/Projects";
import { Container } from "./components/styles/Container.styled";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <h1>Funded grants</h1>
        <div className='mid-wrapper'>
          <div className='hero-row'>
            <div className='filter-container'>
              <Button />
              <Filter />
            </div>
          </div>
          <div className='toggle-wrapper'>
            <input
              type='checkbox'
              id='toggle'
              aria-label='Show only completed'
            />
            <label htmlFor='toggle' className='toggle-text'>
              Show only completed
            </label>
          </div>
        </div>
        <Projects />
        <section className='card-grid-section'></section>
        <Apply />
      </Container>
      <Footer />
    </>
  );
}

export default App;
