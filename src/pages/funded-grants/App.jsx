import Header from "../../shared_components/Header";
import CardFilter from "./components/CardFilter";
import Apply from "../../shared_components/Apply";
import Footer from "../../shared_components/Footer";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  padding: 0 24px;
  width: 100%;

  &._discover {
    max-width: 1100px;
  }

   @media only screen and (width >= 1305px) {
    padding: 0 108px;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <h1 className='title'>Funded grants</h1>
        <CardFilter />
        <Apply />
      </Container>
      <Footer />
    </>
  );
}

export default App;
