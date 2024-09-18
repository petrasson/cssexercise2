import { StyledFilterCardContainer } from "./styles/FilterCardContainer.styled";
import CardHolder from "./CardHolder";
import Filter from "./Filter";
// import React, { useState } from "react";
import rData from "../../data.json";
const { data } = rData;

function FilterCardContainer() {
  return (
    <StyledFilterCardContainer>
      <div className='filter-container'>
        <Filter />
      </div>
      <div className='toggle-wrapper'>
        <input type='checkbox' id='toggle' aria-label='Show only completed' />
        <label htmlFor='toggle' className='toggle-text'>
          Show only completed
        </label>
      </div>
      <CardHolder data={data} />
    </StyledFilterCardContainer>
  );
}

export default FilterCardContainer;

// const [filteredData, setFilteredData] = useState(projects);
// const [filterType, setFilterType] = useState("All");

// const handleFilter = (filterType) => {
//   console.log(filterType, "filterType");
//   setFilterType(filterType);
//   if (filterType === "All") {
//     setFilteredData(projects);
//   } else {
//     const newFilteredData = rData.filter(
//       (item) => item.category === filterType
//     );
//     setFilteredData(newFilteredData);
//     console.log("newFilteredData", newFilteredData);
//   }
// };
