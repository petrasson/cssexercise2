import styled from "styled-components";

export const StyledFilterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

.filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  margin-bottom: 20px;
}

.filter-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgb(35 35 52 / 0%),
    rgb(35 35 52 / 100%)
  );
  z-index: 5;
}

.filter-container::after {
  content: "";
  position: absolute;
  top: 15px;
  right: 2px;
  background-image: url("images/rightarrow.svg");
  width: 20px;
  height: 20px;
  z-index: 6;
  background-repeat: no-repeat;
}



/****** TOGGLE ******/

.toggle-wrapper {
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  color: var(--secondary-text-color);
  align-items: center;
  cursor: pointer;
}

#toggle {
  appearance: none;
  position: relative;
  width: 50px;
  height: 20px;
  border-radius: 25px;
  background-color: var(--accent-color);
  transition: background 0.5s;
  cursor: pointer;
}

#toggle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translate(0, -50%);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: var(--primary-text-color);
  transition: left 0.3s;
}

#toggle:checked {
  background-color: var(--primary-text-color);
}

#toggle:checked::after {
  left: -3px;
  background-color: var(--primary-text-color);
}

.toggle-wrapper .toggle-text {
  padding-left: 27px;
  font-size: 16px;
}


/*********************************** WEB VERSION *********************************/

@media only screen and (width >= 1305px) {


.filter-container::after {
  display: none;
}

.filter-container::before {
  display: none;
}


`;
