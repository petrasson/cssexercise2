import styled from "styled-components";

const TestWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: lightblue;

  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 128, 0, 0.5); /* Visible background color */
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

function TestComponent() {
  return <TestWrapper>Testing ::before Element</TestWrapper>;
}

export default TestComponent;
