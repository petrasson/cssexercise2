import styled from "styled-components";
import HeadTitle from "../../../shared-components/HeadTitle";
import Button from "../../../shared-components/Button";
import CardTransactions from "./CardTransactions";
import ButtonWrapper from "../../../shared-components/ButtonWrapper";
import rUserData from "./../../../../userdata.json";
const { userdata } = rUserData;

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

function GrantDetails({
  category,
  cardTitle,
  status,
  fundingAmountFrom,
  description,
  grantees,
}) {
  const granteeData = grantees
    .map((id) => {
      const user = userdata.find((user) => user.id === id);
      console.log(`Processing grantee ID: ${id}`, "Found user:", user);

      if (!user) {
        console.warn(`User with ID ${id} not found in userdata`);
        return null;
      }

      return {
        imageSrc: `/images/${user.id}.svg`,
        imageAlt: user.name,
        text: user.name,
        link: `/grantee/${user.id}`,
      };
    })
    .filter(Boolean);
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
          onClick={console.log("ProjectLink")}
          image='true'
        />
      </div>
      <h3 className='sub-title'>Team</h3>
      <ButtonWrapper items={granteeData} />
      <hr></hr>
      <div className='text-wrapper'>
        <h3 className='sub-title'>Description</h3>
        <p>{description}</p>
        <h3 className='sub-title'>Purpose</h3>
        <p>
          Funding Rates page will help promote and guide traders around
          Perpetual premiums found across all assets traded on dYdX. Rewards &
          Tracking simulator will help market the benefits of trading on dYdXlga
          and assist current traders in mapping out their rewards. The CLI
          trading tool will make it easier for non-UI based traders to execute
          quickly on dYdX. The general purpose of this grant is to recruit Chaos
          Labs, a very qualified contributor, to work with dYdX on current and
          future projects.
        </p>
        <h3 className='sub-title'>Execution</h3>
        <p>
          3 months to completion. Each individual grant is estimated to take 120
          days, but will be worked on concurrently.
        </p>
        <h3 className='sub-title'>Payment Structure</h3>
        <p>25% upfront / 75% at completion of all Grants</p>
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
      <CardTransactions
        title='Round 9'
        date='1/2/25'
        description='They were used to create the machines that launched two waves of industrial revolution'
        amount='$30,000.00'
      />
      <CardTransactions
        title='Round 13'
        date='11/4/25'
        description='They were used to create the machines that launched two waves of industrial revolution'
        amount='$22,000.00'
      />
    </GrantDetailsWrapper>
  );
}

export default GrantDetails;
