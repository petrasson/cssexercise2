import styled from "styled-components";
import Header from "../../shared-components/Header";
import BackButton from "../../shared-components/BackButton";
import FundedGrantImage from "./components/FundedGrantImage";
import GrantDetails from "./components/GrantDetails";
import Footer from "../../shared-components/Footer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LottieAnimation from "../../shared-components/LottieAnimation";

import { Suspense, useEffect } from "react";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;
  min-height: 100vh;

  p {
    font-size: 16px;
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

function FundedGrantDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || {};
  const { id } = useParams();
  const canGoBack = !!from;

  // // Fetch the data only once when the component mounts
  // if (!cardResource || cardResource.id !== id) {
  //   cardResource = createCardResource(id);
  // }

  // const [cardData, setCardData] = useState(null);
  // const [similiarCards, setSimilarCards] = useState([]);
  // const [transactionData, setTransactionData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // Scroll to the top when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Fetch all data needed for that card to render based on useParams Id

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchCard(id);
  //       setCardData(data);

  //       // Fetch similiar cards
  //       const similiarCardsData = await fetchSimilarCards(data.similiar);
  //       setSimilarCards(similiarCardsData);

  //       // Fetch transactions
  //       const transactionData = await fetchTransactions(data.transactions);
  //       setTransactionData(transactionData);

  //       // Data is fetched, set loading to false
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [id]); // Re-run the effect when the id changes
  // // if (loading) return <div>Loading ..</div>;

  // if (loading) return <LottieAnimation />;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        {canGoBack && (
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        <FundedGrantImage />
        <Suspense fallback={<LottieAnimation />}>
          <GrantDetails id={id} />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrantDetails;
