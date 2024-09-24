import styled from "styled-components";
import Header from "../../shared_components/Header";
import HeadTitle from "../../shared_components/HeadTitle";
import DiscoverFilter from "./components/DiscoverFilter";
import Footer from "../../shared_components/Footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  border: solid red;

  &._discover {
    max-width: 1100px;
  }

   @media only screen and (width >= 1305px) {
    padding: 0 108px;
p {
font-size: 16px;
}
    
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <HeadTitle text='Discover Initiatives' />
        <p>
          The list below includes initial ideas that we think could make
          excellent Grants. This is a living list that will continue to update
          as ideas popup.
        </p>
        {/* <DiscoverFilter /> */}
      </Container>
      <Footer />
    </>
  );
}

export default App;
