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
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
import { useGranteeDetails } from "../../services/Service";

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
  const {
    data: granteeData,
    isLoading: isGranteeDataLoading,
    error: granteeDataError,
  } = useGranteeDetails(id);

  const grantIds = granteeData ? granteeData.grants : null;
  const {
    data: grantsDetails,
    isLoading: isgrantsDetailsLoading,
    error: grantsDetailsError,
  } = useSWR(
    grantIds && Array.isArray(grantIds) && grantIds.length > 0
      ? `https://nextjs-test-beryl-gamma.vercel.app/api/grants?ids=${grantIds.join(
          ","
        )}`
      : null,
    fetcher
  );
  const granteesIds = grantsDetails
    ? grantsDetails.grants.flatMap((grant) => grant.grantees_ids)
    : null;

  const {
    data: granteesDetails,
    isLoading: isgranteesDetailsLoading,
    error: granteesDetailsError,
  } = useSWR(
    granteesIds && Array.isArray(granteesIds) && granteesIds.length > 0
      ? `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?ids=${granteesIds.join(
          ","
        )}`
      : null,
    fetcher
  );

  if (granteeDataError || grantsDetailsError || granteesDetailsError)
    return <div>Error loading data</div>;
  if (
    isGranteeDataLoading ||
    isgrantsDetailsLoading ||
    isgranteesDetailsLoading
  )
    return <div>Loading...</div>;

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
                data={granteeData?.links}
                position='external-links'
              />
            </div>
          </div>
          <h1 className='projects-text'>Projects</h1>

          <div className='card-wrapper'>
            {grantsDetails.grants.map((card) => {
              // Wrap logic with braces so `granteeImageUrls` is computed correctly
              const granteeImageUrls = card?.grantees_ids?.map((granteeId) => {
                const grantee = granteesDetails?.grantees.find(
                  (grantee) => grantee.id === granteeId
                );
                return grantee ? grantee.image_url : null;
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
