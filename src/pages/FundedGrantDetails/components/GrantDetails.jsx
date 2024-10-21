import styled from "styled-components";
import PropTypes from "prop-types";
import HeadTitle from "../../../shared-components/HeadTitle";
import Button from "../../../shared-components/Button";
import CardTransactions from "./CardTransactions";
import ButtonWrapper from "../../../shared-components/ButtonWrapper";
import SimilarGrants from "./SimilarGrants";
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


@media (min-width: 768px) {
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

/*** FETCH GRANTEEDATA BASED ON ID ***/

const fetchGranteeData = async (id) => {
  const res = await fetch(
    `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  return {
    id: data.id,
    image_url: data.image_url,
    name: data.name,
    links: data.links,
  };
};

function GrantDetails({
  category,
  cardTitle,
  // status,
  fundingAmountFrom,
  description,
  purpose,
  execution,
  payment_structure,
  similiar,
  transactions,
  granteeIds,
}) {
  const [granteeData, setGranteeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllGranteeData = async () => {
      try {
        setLoading(true);
        const granteePromises = granteeIds.map((id) => fetchGranteeData(id));
        const granteesData = await Promise.all(granteePromises); // Fetch all users in parallel
        setGranteeData(granteesData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAllGranteeData();
  }, [granteeIds]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <GrantDetailsWrapper>
      <p className='card-category'>{category}</p>
      <HeadTitle text={cardTitle} />
      <div className='project-detail-wrapper'>
        <div className='row-wrapper'>
          <p className='status'>{status}</p>
          <p className='funding-amount'>Funding amount:</p>
          <p>${fundingAmountFrom}</p>
        </div>
        <Button
          type='accent'
          text='Project link'
          onClick={() => console.log("ProjectLink")}
          image='true'
        />
      </div>
      <h3 className='sub-title'>Team</h3>
      <ButtonWrapper items={granteeData} position='link-to-profile' />
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
      {console.log(transactions, "transactions")}
      {transactions.map((card) => {
        return (
          <CardTransactions
            key={card.id}
            title={card.title}
            date={card.date}
            description={card.description}
            amount={card.amound}
          />
        );
      })}
      <SimilarGrants similarGrants={similiar} />
    </GrantDetailsWrapper>
  );
}

GrantDetails.propTypes = {
  category: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
  fundingAmountFrom: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  execution: PropTypes.string.isRequired,
  payment_structure: PropTypes.string.isRequired,
  similiar: PropTypes.arrayOf(PropTypes.string).isRequired,
  granteeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

export default GrantDetails;
