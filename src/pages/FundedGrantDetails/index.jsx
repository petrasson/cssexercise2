import styled from "styled-components";
import Header from "../../shared-components/Header";
import BackButton from "../../shared-components/BackButton";
import FundedGrantImage from "./components/FundedGrantImage";
import GrantDetails from "./components/GrantDetails";
import Footer from "../../shared-components/Footer";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;

  p {
    font-size: 16px;
  }

  @media only screen and (width >= 1305px) {
    padding: 0 108px;
  }
`;

/*** FETCH CARD DETAILS BASED ON ID ***/

const fetchCard = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch card details");
    }
    const data = await res.json();

    // Call the function to fetch similiar cards and transactions based on IDs in the response
    await fetchSimilarCards(data.similiar);
    await fetchTransactions(data.transactions);
    return data;
  } catch (error) {
    console.error("Error fetching card data:", error); // Log any errors
    throw error;
  }
};

/*** FETCH SIMILAR CARD DETAILS BASED ON RESPONS ***/

const fetchSimilarCards = async (similiarIds) => {
  if (!similiarIds || similiarIds.length === 0) {
    console.log("No similar IDs found.");
    return;
  }
  try {
    // Fetch each similiar card by its ID
    const similiarCardPromises = similiarIds.map(async (id) => {
      const res = await fetch(
        `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch similiar card with id ${id}`);
      }
      return res.json();
    });

    // Wait for fetches to complete

    const similiarCardsData = await Promise.all(similiarCardPromises);
    return similiarCardsData;
  } catch (error) {
    console.error("Error fetching similiar cards:", error);
    throw error;
  }
};

/*** FETCH TRANSACTION DETAILS BASED ON RESPONS ***/

const fetchTransactions = async (transactionIds) => {
  if (!transactionIds || transactionIds.length === 0) {
    console.log("No transactions IDs found.");
    return;
  }
  try {
    // Fetch each transaction by its ID
    const transactionsPromises = transactionIds.map(async (id) => {
      const res = await fetch(
        `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch transaction data with id ${id}`);
      }
      return res.json();
    });

    // Wait for data to complete
    const transactionData = await Promise.all(transactionsPromises);
    return transactionData;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    throw error;
  }
};

function FundedGrantDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || {};
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);
  const [similiarCards, setSimilarCards] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to the top when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Fetch all data needed for that card to render based on useParams Id

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCard(id);
        setCardData(data);

        // Fetch similiar cards
        const similiarCardsData = await fetchSimilarCards(data.similiar);
        setSimilarCards(similiarCardsData);

        // Fetch transactions
        const transactionData = await fetchTransactions(data.transactions);
        setTransactionData(transactionData);

        // Data is fetched, set loading to false
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]); // Re-run the effect when the id changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const canGoBack = !!from;

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
        {cardData && (
          <GrantDetails
            key={cardData.id}
            category={cardData.category}
            cardTitle={cardData.title}
            fundingAmountFrom={cardData.amountFrom}
            status={cardData.status}
            description={cardData.description}
            purpose={cardData.purpose}
            execution={cardData.execution}
            payment_structure={cardData.payment_structure}
            similiar={similiarCards}
            transactions={transactionData}
            granteeIds={cardData.grantees_ids}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrantDetails;
