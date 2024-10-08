import Header from "../../shared-components/Header";
import Footer from "../../shared-components/Footer";
import styled from "styled-components";
import HeadTitle from "../../shared-components/HeadTitle";

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
        <HeadTitle text='Program Expenses' />
      </Container>
      <Footer />
    </>
  );
}

export default App;
