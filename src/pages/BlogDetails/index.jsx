import styled from "styled-components";
import Header from "../../shared-components/Header";
import BackButton from "../../shared-components/BackButton";
// import GrantDetails from "./components/GrantDetails";
import Footer from "../../shared-components/Footer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LottieAnimation from "../../shared-components/LottieAnimation";
import { Suspense } from "react";

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

function BlogDetails({ cardTitle }) {
  console.log("cardTitle", cardTitle);
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || {};
  const { id } = useParams();
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

        <Suspense fallback={<LottieAnimation />}>
          <div className='title-wrapper'>
            <p>Funding round</p>
            <p>Funding {cardTitle} of approvals</p>
            <p>By:</p>
            <div>Grants Team</div>
          </div>
          <div>image</div>
          <p>
            Hi Everyone! Excited to share another round of funding approved by
            the Committee! For Round 6, we have 5 grantees with a total of
            $246,000.00 in DYDX funding. Check out the table below for more
            information on each grant. We’re also happy to share that the
            Committee revamp is close to getting finalized. This revamp will
            enable payments to be complete by the Grants multisig. The team is
            working on the final documentation and will share everything with
            the community as soon as its ready. We’re excited to finally start
            paying our Grantees to really get things going! Centralization lets
            you make decisions quickly We’re also happy to share that the
            Committee revamp is close to getting finalized. This revamp will
            enable payments to be complete by the Grants multisig. The team is
            working on the final documentation and will share everything with
            the community as soon as its ready. We’re excited to finally start
            paying our Grantees to really get things going! We’re also happy to
            share that the Committee revamp is close to getting finalized. This
            revamp will enable payments to be complete by the Grants multisig.
            The team is working on the final documentation and will share
            everything with the community as soon as its ready. We’re excited to
            finally start paying our Grantees to really get things going! Hope
            everyone has a great week!
          </p>
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default BlogDetails;
