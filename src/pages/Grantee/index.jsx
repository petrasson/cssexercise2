import styled from "styled-components";
import Header from "../../shared-components/Header";
import ButtonWrapper from "../../shared-components/ButtonWrapper";
import BackButton from "../../shared-components/BackButton";
import Footer from "../../shared-components/Footer";
import HeadTitle from "../../shared-components/HeadTitle";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import Card from "../../shared-components/Card";
import { useEffect, useState } from "react";

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
      margin-bottom: 30px;
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

/** FETCH USER DATA ***/

const fetchGranteeData = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch card details");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching card data:", error); // Log any errors
    throw error;
  }
};

/** FETCH DETAILD GRANT DATA USING GRANT ID ***/

const fetchGrantData = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch grant with id ${id}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching grant data:", error);
    throw error;
  }
};

/** FETCH USER IMAGES USING USER ID ***/

const fetchGranteeImageData = async (id) => {
  const res = await fetch(
    `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  return data.image_url;
};

function Grantee() {
  const [granteeData, setGranteeData] = useState([]);
  const [grantData, setGrantData] = useState([]);
  const [granteeImages, setGranteeImages] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || {};
  const canGoBack = !!from;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //fetching the users data based on id
        const grantee = await fetchGranteeData(id);
        setGranteeData(grantee);

        //Fetch the details of each project (grant) the grantee has been involved in
        const grantIds = grantee.grants; // Get the project IDs
        const grantPromises = grantIds.map((grantId) =>
          fetchGrantData(grantId)
        );
        const grants = await Promise.all(grantPromises); // Fetch all project data in parallel
        setGrantData(grants);

        // Fetch images for all grantees (users) involved in each project
        const granteeImagePromises = {};
        grants.forEach((grant) => {
          grant.grantees_ids.forEach((granteeId) => {
            // Avoid fetching the same image multiple times
            if (!granteeImagePromises[granteeId]) {
              granteeImagePromises[granteeId] =
                fetchGranteeImageData(granteeId);
            }
          });
        });

        // Resolve all image fetch promises
        const resolvedImages = await Promise.all(
          Object.keys(granteeImagePromises).map(
            (granteeId) => granteeImagePromises[granteeId]
          )
        );

        // Create an object with {granteeId: imageUrl}
        const granteeImagesMap = Object.keys(granteeImagePromises).reduce(
          (acc, granteeId, index) => {
            acc[granteeId] = resolvedImages[index];
            return acc;
          },
          {}
        );

        setGranteeImages(granteeImagesMap);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        <img src={`${granteeData.image_url}`} alt='picture of user' />
        <HeadTitle text={granteeData.name} />
        <div className='text-wrapper'>
          <h3 className='sub-title'>About</h3>
          <p className='grant-text'>{granteeData.about}</p>
          <h3 className='sub-title'>Links</h3>
          <div className='link-wrapper'>
            <ButtonWrapper
              items={granteeData.links}
              location={location}
              position='external-links'
            />
          </div>
        </div>
        <h1 className='projects-text'>Projects</h1>
        <div className='card-wrapper'>
          {grantData.map((card) => {
            const granteeImageUrls = card.grantees_ids.map(
              (granteeId) => granteeImages[granteeId]
            );

            return (
              <StyledLink key={card.id} to={`/card/${card.id}`}>
                <Card
                  key={card.id}
                  category={card.category}
                  cardTitle={card.title}
                  fundingAmountFrom={card.amountFrom}
                  fundingAmountTo={card.amountTo}
                  description={card.description}
                  grantees={granteeImageUrls}
                />
              </StyledLink>
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Grantee;
