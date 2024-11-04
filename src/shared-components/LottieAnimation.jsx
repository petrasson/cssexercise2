import styled from 'styled-components';
import '@dotlottie/player-component';

const LottieWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

function LottieAnimation() {
  return (
    <LottieWrapper>
      <dotlottie-player
        src="https://lottie.host/de0f6455-017d-48d0-99f9-4be0a6f43122/qK0R5OJxQH.lottie"
        autoplay
        loop
        style={{ height: '400px', width: '400px' }}
      ></dotlottie-player>
    </LottieWrapper>
  );
}

export default LottieAnimation;
