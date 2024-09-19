import CardHolder from "./CardHolder";
import FilterControl from "../../../shared_components/FilterControl";
import React, { useState } from "react";
import rData from "../../../../data.json";
const { cards } = rData;

import styled from "styled-components";

const CardFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;




/****** TOGGLE ******/

// .toggle-wrapper {
//   display: flex;
//   flex-direction: row;
//   max-width: 1440px;
//   color: var(--secondary-text-color);
//   align-items: center;
//   cursor: pointer;
// }

// #toggle {
//   appearance: none;
//   position: relative;
//   width: 50px;
//   height: 20px;
//   border-radius: 25px;
//   background-color: var(--accent-color);
//   transition: background 0.5s;
//   cursor: pointer;
// }

// #toggle::after {
//   content: "";
//   position: absolute;
//   top: 50%;
//   left: 22px;
//   transform: translate(0, -50%);
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   background-color: var(--primary-text-color);
//   transition: left 0.3s;
// }

// #toggle:checked {
//   background-color: var(--primary-text-color);
// }

// #toggle:checked::after {
//   left: -3px;
//   background-color: var(--primary-text-color);
// }

// .toggle-wrapper .toggle-text {
//   padding-left: 27px;
//   font-size: 16px;
// }


/*********************************** WEB VERSION *********************************/

@media only screen and (width >= 1305px) {


// .filter-container::after {
//   display: none;
// }

// .filter-container::before {
//   display: none;
// }


`;

function CardFilter() {
  const [filterType, setFilterType] = useState("All");
  const [filteredData, setFilteredData] = useState(cards);
  const [filterCompleted, setFilteredCompleted] = useState(true);

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    let newFilteredData;

    if (filterType === "All") {
      newFilteredData = cards;
    } else {
      newFilteredData = cards.filter((item) => item.category === filterType);
    }

    setFilteredData(newFilteredData);
    console.log("filteredData", newFilteredData);
  };

  return (
    <CardFilterWrapper>
      <FilterControl handleFilter={handleFilter} withToggle={true} />

      <CardHolder cards={filteredData} filterType={filteredData} />
    </CardFilterWrapper>
  );
}

export default CardFilter;

/*
const handleToggle = (value) => { 
 setFilteredCompleted(value);
 
<
        type='primary'
        filterType='All'
        onClick={() => handleFilter()}
      />



  } */