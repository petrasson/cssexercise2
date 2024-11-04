import styled from "styled-components";
import Header from "../../shared-components/Header";
import ButtonWrapper from "../../shared-components/ButtonWrapper";
import BackButton from "../../shared-components/BackButton";
import Footer from "../../shared-components/Footer";
import HeadTitle from "../../shared-components/HeadTitle";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import Card from "../../shared-components/Card";
import { Suspense } from "react";
import LottieAnimation from "../../shared-components/LottieAnimation";

import { useGranteeDetails, useGrantsDetails } from "../../services/Service";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 0 24px;
  width: 100%;

  p {
    font-size: 16px;
  }

  img {
    width: 270px;
    margin: 60px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;

    .grant-text {
      font-size: 16px;
      line-height: 24px;
      color: var(--secondary-text-color);
      margin: 0 0 30px;
      text-align: left;
      width: 100%;
    }
  }

  .link-wrapper {
    margin-right: auto;
  }

  .projects-text {
    cursor: pointer;
    margin: 120px 0 50px 0;
  }

  .card-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
      // justify-content: center;
    justify-content: start;
    text-align: left;
    width: 100%;
  }

  /*********************************** WEB VERSION *********************************/

  @media only screen and (width >= 1305px) {

  .card-wrapper {
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

function Grantee() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location?.state || {};
  const canGoBack = !!from;
  const { data: granteeData, error: granteeError } = useGranteeDetails(id);
  const grantsIds = granteeData?.grants || [];
  console.log("grantsIds:", grantsIds);
  const {
    data: grantsData,
    error: grantsError,
    isLoading: grantsLoading,
  } = useGrantsDetails(grantsIds);

  console.log("grantsData:", grantsData);

  if (granteeError) return <div>Error loading grantee details.</div>;
  if (!granteeData) return <div>Loading grantee data...</div>;

  if (grantsError) return <div>Error loading grants.</div>;
  if (grantsLoading) return <div>Loading grants...</div>;

  return (
    <div className='page-wrapper'>
      <Header />
      <Container>
        {canGoBack && (
          <BackButton
            onClick={() => {
              console.log("BackButton clicked");
              navigate(-1);
            }}
          />
        )}
        <Suspense fallback={<LottieAnimation />}>
          <img src={`${granteeData?.image_url}`} alt='picture of user' />
          <HeadTitle text={granteeData?.name} />
          <div className='text-wrapper'>
            <h3 className='sub-title'>About</h3>
            <p className='grant-text'>{granteeData?.about}</p>
            <h3 className='sub-title'>Links</h3>
            <div className='link-wrapper'>
              <ButtonWrapper
                items={granteeData?.links}
                position='external-links'
              />
            </div>
          </div>
          <h1 className='projects-text'>Projects</h1>

          <div className='card-wrapper'>
            {grantsData.map((card) => {
              const granteeImageUrls = card?.grantees_ids?.map((granteeId) => {
                // Find the grantee data using the granteeId
                const grantee = granteesData.find(
                  (grantee) => grantee.id === granteeId
                );
                // Return the imageUrl, or handle cases where the grantee is not found
                return grantee ? grantee.image_url : null; // Return image_url from grantee data
              });
              return (
                <StyledLink key={card.id} to={`/card/${card.id}`}>
                  <Card
                    key={card?.id}
                    category={card?.category}
                    cardTitle={card?.title}
                    fundingAmountFrom={card?.amountFrom}
                    fundingAmountTo={card?.amountTo}
                    description={card?.description}
                    grantees={granteeImageUrls}
                  />
                </StyledLink>
              );
            })}
          </div>
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default Grantee;