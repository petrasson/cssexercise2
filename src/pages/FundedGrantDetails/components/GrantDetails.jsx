import styled from "styled-components";
import HeadTitle from "../../../shared-components/HeadTitle";
import Button from "../../../shared-components/Button";
import CardTransactions from "./CardTransactions";
import ButtonWrapper from "../../../shared-components/ButtonWrapper";
import SimilarGrants from "./SimilarGrants";
import {
  fetchCard,
  fetchTransactions,
  fetchSimilarCards,
} from "../../../services/CardService";
import { useEffect, useState } from "react";

const GrantDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 16px;

  .card-category {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 16px;
    margin: 8px 0;
  }

  .project-detail-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
  }

  .row-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;

    .status {
      display: flex;
      text-align: center;
      justify-content: center;
      align-content: center;
      border-radius: 30px;
      border: none;
      padding: 0 6px;
      font-size: 14px;
      color: white;
      background-color: var(--btn-completed);
      padding: 6px 10px;
    }

    .funding-amount {
      padding: 0 20px;
      color: var(--secondary-text-color);
      text-align: center;
    }
  }

  hr {
    height: 1px;
    background-color: var(--secondary-bg-color);
    border: none;
    width: 100%;
    margin: 10px;
  }

  .sub-title {
    font-size: 20px;
    margin: 23px 0 0 0;
  }

  .sub-title.funding {
    margin-bottom: 20px;
    margin-right: auto;
  }

  .text-wrapper {

    p {
      font-size: 16px;
      line-height: 24px;
      color: var(--secondary-text-color);
      margin-bottom: 50px;
    }

    .links, .external-link-symbol {
      color: var(--accent-color);
    }
  }


  .link-wrapper {
    margin-top: 6px;
  }

  .link-row-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    padding: 10px 0;

    .links { 
      margin-bottom:0;
    }
  }

  .links {
    margin: 0;
    padding-right: 10px;    
  }

  .external-link-symbol {
    color: var(--accent-color);
  }


@media (width >= 768px) {
  align-items: flex-start;
  align-content: flex-start;
  text-align: left;

  .project-detail-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .row-wrapper {
    flex-direction: row;  
  }
`;

function GrantDetails({ id }) {
  const [card, setCard] = useState({});
  const [similarCards, setSimilarCards] = useState({});
  const [transactionsData, setTransactionsData] = useState([]); // Här låg felet, det var en {}

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch the main card data by ID
        const cardData = await fetchCard(id);
        setCard(cardData);

        // Fetch similar cards only if the 'similiar' array exists and has items
        if (cardData.similiar && cardData.similiar.length > 0) {
          const similarCardsData = await fetchSimilarCards(cardData.similiar);
          setSimilarCards(similarCardsData);
        } else {
          console.log("No similar card IDs found in cardData.");
        }

        // Fetch transactions only if the 'transactions' array is present and has items
        if (cardData.transactions && cardData.transactions.length > 0) {
          console.log(
            "I see this, fetching transactions for IDs:",
            cardData.transactions
          );
          const transactionsData = await fetchTransactions(
            cardData.transactions
          );
          setTransactionsData(transactionsData);
        } else {
          console.log("No transaction IDs found in cardData.");
        }
      } catch (error) {
        // Error handling
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData(); // Call the fetchAllData function when the component mounts or when 'id' changes
  }, [id]); // rerun when 'id' changes

  const {
    grantees_ids,
    category,
    title,
    completed,
    amountFrom,
    description,
    purpose,
    execution,
    payment_structure,
  } = card;

  return (
    <GrantDetailsWrapper>
      <p className='card-category'>{category}</p>
      <HeadTitle text={title} />
      <div className='project-detail-wrapper'>
        <div className='row-wrapper'>
          <p className='status'>{completed ? "Completed" : "Open"}</p>
          <p className='funding-amount'>Funding amount:</p>
          <p>${amountFrom}</p>
        </div>
        <Button
          type='accent'
          text='Project link'
          onClick={() => console.log("ProjectLink")}
          image='true'
        />
      </div>
      <h3 className='sub-title'>Team</h3>
      <ButtonWrapper items={grantees_ids} position='link-to-profile' />
      <hr></hr>
      <div className='text-wrapper'>
        <h3 className='sub-title'>Description</h3>
        <p>{description}</p>
        <h3 className='sub-title'>Purpose</h3>
        <p>{purpose}</p>
        <h3 className='sub-title'>Execution</h3>
        <p>{execution}</p>
        <h3 className='sub-title'>Payment Structure</h3>
        <p>{payment_structure}</p>
        <h3 className='sub-title'>Useful Links</h3>
        <div className='link-wrapper'>
          <div className='link-row-wrapper'>
            <p className='links'>www.granttileproject.com</p>
            <img
              src='/images/external-link-purple.svg'
              aria-hidden='true'
              className='external-link-purple'
            />
          </div>
          <div className='link-row-wrapper'>
            <p className='links'>www.granttileproject.com</p>
            <img
              src='/images/external-link-purple.svg'
              aria-hidden='true'
              className='external-link-purple'
            />
          </div>
          <div className='link-row-wrapper'>
            <p className='links'>www.granttileproject.com</p>
            <img
              src='/images/external-link-purple.svg'
              aria-hidden='true'
              className='external-link-purple'
            />
          </div>
        </div>
      </div>
      <h3 className='sub-title funding'>Funding Transactions</h3>

      {transactionsData?.map((card) => {
        return (
          <CardTransactions
            key={card?.id}
            title={card.title}
            date={card?.date}
            description={card?.description}
            amount={card?.amound}
          />
        );
      })}
      <SimilarGrants similarGrants={similarCards} />
    </GrantDetailsWrapper>
  );
}

export default GrantDetails;
