import styled from "styled-components";

export const StyledApply = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(
    360deg,
    rgb(105 102 255 / 100%) 0%,
    rgb(35 34 101 / 60%) 100%
  );


/* To create a border with linear-gradient */
.apply-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background: linear-gradient(
    169deg,
    rgb(105 102 255 / 100%) 0%,
    rgb(35 34 101 / 60%) 100%
  );
  padding: 40px 16px;
  width: 100%;
  box-sizing: border-box;
}

.apply-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
}

.apply-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 40px;
}

.arrowb-right {
  padding-left: 5px;
}
}

@media only screen and (width >= 1305px) {
.apply-wrapper {
    width: auto;
  }

  .apply-text {
    font-size: 18px;
    font-weight: 450;
    margin-bottom: 8px;
  }

  .apply-title {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 40px;
  }

  .arrowb-right {
    padding-left: 10px;
  }

}
`;
