import { StyledFilterCardContainer } from "./styles/FilterCardContainer.styled";
import CardHolder from "./CardHolder";
import Filter from "./Filter";
import React, { useState } from "react";
import rData from "../../data.json";
const { cards } = rData;

function FilterCardContainer() {
  const [filterType, setFilterType] = useState("All");
  const [filteredData, setFilteredData] = useState(cards);

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
    <StyledFilterCardContainer>
      <div className='filter-container'>
        <Filter handleFilter={handleFilter} />
      </div>
      <div className='toggle-wrapper'>
        <input type='checkbox' id='toggle' aria-label='Show only completed' />
        <label htmlFor='toggle' className='toggle-text'>
          Show only completed
        </label>
      </div>
      <CardHolder cards={filteredData} filterType={filteredData} />
    </StyledFilterCardContainer>
  );
}

export default FilterCardContainer;

// const handleFilter = (filterType) => {
//   console.log(filterType, "filterType");
//   setFilterType(filterType);

//   if (filterType === "All") {
//     setFilteredData(data);
//   } else {
//     const newFilteredData = rData.filter(
//       (item) => item.category === filterType
//     );

//     setFilteredData(newFilteredData);
//     console.log("newFilteredData", newFilteredData);
//   }
