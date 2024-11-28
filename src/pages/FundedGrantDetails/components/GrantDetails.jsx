import styled from "styled-components";
import HeadTitle from "../../../shared-components/HeadTitle";
import Button from "../../../shared-components/Button";
import CardTransactions from "./CardTransactions";
import ButtonWrapper from "../../../shared-components/ButtonWrapper";
import SimilarGrants from "./SimilarGrants";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

import { useGrantDetails } from "../../../services/Service";

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

    .completed, .open {
      position: relative;
      display: flex;
      text-align: center;
      justify-content: center;
      align-content: center;
      border-radius: 30px;
      border: none;
      
      .text {
        font-size: 14px;
        color: white;
        margin: 0;
      }

      .check-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;      
        }
    }

    .completed {
      background-color: var(--btn-completed);
      padding: 5px 30px 5px 10px;

    }
    .open {
      background-color: var(--accent-color);
      padding: 5px 10px;

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
    margin: 35px 0 0 0;
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

// fetch grant details
function GrantDetails({ id }) {
  const {
    data: grantData,
    isLoading: grantDataIsLoading,
    error: grantDataError,
  } = useGrantDetails(id);
  console.log({ grantData });

  const teamMembersIds = grantData ? grantData.grantees_ids : null;
  console.log({ teamMembersIds });

  // // fetch grantee details based on teamIds
  // const {
  //   data: granteesDetails,
  //   isLoading: isGranteesDetailsLoading,
  //   error: granteesDetailsError,
  // } = useSWR(
  //   teamMembersIds && Array.isArray(teamMembersIds) && teamMembersIds.length > 0
  //     ? `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?ids=${teamMembersIds.join(
  //         ","
  //       )}`
  //     : null,
  //   fetcher
  // );

  // console.log("granteesDetails:", granteesDetails);

  /***********SIMILAR PROJECTS***********/

  // const similarProjectsIds = grantData ? grantData.similiar : null;
  // console.log("similarProjectsIds:", similarProjectsIds);

  // //fetch similar project data
  // const {
  //   data: similarGrantsDetails,
  //   isLoading: isSimilarGrantsDetailsLoading,
  //   error: similarGrantsDetailsError,
  // } = useSWR(
  //   similarProjectsIds &&
  //     Array.isArray(similarProjectsIds) &&
  //     similarProjectsIds.length > 0
  //     ? `https://nextjs-test-beryl-gamma.vercel.app/api/grants?ids=${similarProjectsIds.join(
  //         ","
  //       )}`
  //     : null,
  //   fetcher
  // );
  // console.log("similarGrantsDetails:", similarGrantsDetails);

  // const similarGranteesIds = similarGrantsDetails
  //   ? similarGrantsDetails.grants.flatMap((grant) => grant.grantees_ids)
  //   : null;

  //fetch grantee data based on similar project data

  // const {
  //   data: similarGrantsGranteesDetails,
  //   isLoading: isSimilarGrantsGranteesDetailsLoading,
  //   error: similarGrantsGranteesDetailsError,
  // } = useSWR(
  //   similarGranteesIds &&
  //     Array.isArray(similarGranteesIds) &&
  //     similarGranteesIds.length > 0
  //     ? `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?ids=${similarGranteesIds.join(
  //         ","
  //       )}`
  //     : null,
  //   fetcher
  // );
  // console.log("similarGrantsGranteesDetails:", similarGrantsGranteesDetails);

  /***********TRANSACTIONS***********/

  // const transactoinsIds = grantData ? grantData.transactions : null;

  // console.log({ transactoinsIds });

  //fetch transactions data based on the transactionsId in grantData

  // const {
  //   data: transactionsDetails,
  //   isLoading: isTransactionsDetailsLoading,
  //   error: transactionsDetailsError,
  // } = useSWR(
  //   transactoinsIds &&
  //     Array.isArray(transactoinsIds) &&
  //     transactoinsIds.length > 0
  //     ? `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?ids=${transactoinsIds.join(
  //         ","
  //       )}`
  //     : null,
  //   fetcher
  // );
  // console.log("transactionsDetails:", transactionsDetails);

  // const transactionsData = transactionsDetails.transactions;
  // console.log("transactionsData:", transactionsData);

  // /************ ERRORS AND LOADING HANDELING *************/

  // if (grantDataError) return <div>Error loading grant details</div>;
  // if (granteesDetailsError) return <div>Error loading grantees details</div>;
  // if (similarGrantsDetailsError)
  //   return <div>Error loading similar grants details</div>;
  // if (similarGrantsGranteesDetailsError)
  //   return <div>Error loading grantees details for each grant card</div>;
  // if (transactionsDetailsError)
  //   return <div>Error loading transactions details </div>;

  // if (
  //   grantDataIsLoading ||
  //   isGranteesDetailsLoading ||
  //   isSimilarGrantsDetailsLoading ||
  //   isSimilarGrantsGranteesDetailsLoading ||
  //   isTransactionsDetailsLoading
  // )
  //   return <div>Loading...</div>;

  const {
    //grantees_ids,
    category,
    title,
    completed,
    amountFrom,
    description,
    purpose,
    execution,
    payment_structure,
  } = grantData;

  return (
    <GrantDetailsWrapper>
      <>
        <p className='card-category'>{category}</p>
        <HeadTitle text={title} />
        <div className='project-detail-wrapper'>
          <div className='row-wrapper'>
            {completed ? (
              <>
                <p className='completed'>
                  <p className='text'>Completed</p>
                  <img
                    src='/images/check.svg'
                    alt='check icon'
                    className='check-icon'
                  />
                </p>
              </>
            ) : (
              <p className='open'>Open</p>
            )}
            <p className='funding-amount'>Funding amount:</p>
            <p>${amountFrom}</p>
          </div>
          <Button
            type='accent'
            text='Project link'
            onClick={() => console.log("ProjectLink")}
            image={true}
          />
        </div>
        <h3 className='sub-title'>Team</h3>
        {/* <ButtonWrapper data={granteesDetails} position='link-to-profile' /> */}
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

        {/* {transactionsData?.map((card) => {
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

        <SimilarGrants
          similarGrants={similarGrantsDetails}
          granteesData={similarGrantsGranteesDetails}
        /> */}
      </>
    </GrantDetailsWrapper>
  );
}

export default GrantDetails;
