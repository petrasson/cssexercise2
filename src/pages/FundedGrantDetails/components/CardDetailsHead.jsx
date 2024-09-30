import styled from "styled-components";
import HeadTitle from "../../../shared-components/HeadTitle";
import Button from "../../../shared-components/Button";
const CardDetailsHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 16px;
  border: solid yellow;

  .card-category {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 16px;
    margin: 8px 0;
  }

  .project-detail-wrapper {
    border: solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  
}
  .row-wrapper {
    border: solid green;
    display: flex;
    flex-direction: column;
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

    
  .status {
    margin-right: auto;
  }
`;

function CardDetailsHead({
  category,
  cardTitle,
  status,
  fundingAmountFrom,
  description,
  attendees,
  purpose,
  execution,
  payment,
}) {
  console.log("status", status);
  return (
    <CardDetailsHeadWrapper>
      <p className='card-category'>{category}</p>
      <HeadTitle text={cardTitle} />
      <div className='project-detail-wrapper'>
        <div className='row-wrapper'>
          <p className='status'>{status}</p>

          <p>Funding amount:</p>
          <p>{fundingAmountFrom}</p>
        </div>
        <Button
          type='accent'
          text='Project link'
          onClick={console.log("ProjectLink")}
        />{" "}
      </div>
      <h3 className='sub-title'>Team</h3>

      <div className='attendees-wrapper'>
        <div className='attendee'>{attendees}</div>
      </div>
      <br></br>
      <h3 className='sub-title'>Description</h3>
      <p>{description}</p>
      <h3 className='sub-title'>Purpose</h3>
      <p>{purpose}</p>
      <h3 className='sub-title'>Execution</h3>
      <p>{execution}</p>
      <h3 className='sub-title'>Payment Structure</h3>
      <p>25% upfront / 75% at completion of all Grants</p>
      <h3 className='sub-title'>Useful Links</h3>
      <p>www.granttileproject.com</p>
      <p>www.granttileproject.com</p>
      <p>www.granttileproject.com</p>
      <h3 className='sub-title'>Funding Transactions</h3>
    </CardDetailsHeadWrapper>
  );
}

export default CardDetailsHead;
