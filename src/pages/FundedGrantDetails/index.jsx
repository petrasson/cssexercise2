import styled from "styled-components";
import Header from "../../shared-components/Header";
import BackButton from "../../shared-components/BackButton";
import FundedGrantImage from "./components/FundedGrantImage";
import GrantDetails from "./components/GrantDetails";
import Footer from "../../shared-components/Footer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LottieAnimation from "../../shared-components/LottieAnimation";
import { Suspense, useEffect } from "react";

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

function FundedGrantDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || {};
  const { id } = useParams();
  const canGoBack = !!from;

  // Scroll to the top when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
        <Suspense fallback={<LottieAnimation />}>
          <GrantDetails id={id} />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default FundedGrantDetails;
