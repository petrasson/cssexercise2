import { StyledFilterCardContainer } from "./styles/FilterCardContainer.styled";
import CardHolder from "./CardHolder";
import Filter from "./Filter";
// import React, { useState } from "react";
import rData from "../../data.json";
const { data } = rData;

function FilterCardContainer() {
  const [filterType, setFilterType] = useState("All");

  const handleFilter = (selectedFilter) => {
    setFilterType(selectedFilter);
    console.log("Filtering by:", selectedFilter);
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
      <CardHolder cards={data} filterType={filterType} />
    </StyledFilterCardContainer>
  );
}

export default FilterCardContainer;

// const [filterType, setFilterType] = useState("All");
// const [filteredData, setFilteredData] = useState(data);

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
