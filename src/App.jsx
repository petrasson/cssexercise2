import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import FilterCardContainer from "./components/FilterCardContainer";
import Apply from "./components/Apply";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <h1 className='title'>Funded grants</h1>
        <FilterCardContainer />
        <Apply />
      </Container>
      <Footer />
    </>
  );
}

export default App;
