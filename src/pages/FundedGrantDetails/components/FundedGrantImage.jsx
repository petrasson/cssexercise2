import styled from 'styled-components';

const FundedGrantImageWrapper = styled.div`
  border-radius: 30px;
  display: flex;
  margin: auto 0;
  width: 100%;
  padding: 80px 0 0 0;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

function FundedGrantImage() {
  return (
    <FundedGrantImageWrapper>
      <img
        src="/images/funded-grant.png"
        alt="images of the logotypes chaos labs and dydx"
        className="image-fundedgrants"
      />
    </FundedGrantImageWrapper>
  );
}

export default FundedGrantImage;
