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
`;

function CardFilter() {
  const [filterType, setFilterType] = useState("All");
  const [filteredData, setFilteredData] = useState(
    cards.filter((item) => item.completed === true)
  );
  const [filterCompleted, setFilteredCompleted] = useState(true);

  const applyFilters = (category, completed) => {
    let newFilteredData = cards;

    // Filter by category if not "All"
    if (category !== "All") {
      newFilteredData = newFilteredData.filter(
        (item) => item.category === category
      );
    }

    // Filter by completion status
    if (completed) {
      newFilteredData = newFilteredData.filter(
        (item) => item.completed === true
      );
    } else {
      newFilteredData;
    }

    setFilteredData(newFilteredData);
  };

  const handleFilter = (filterType) => {
    setFilterType(filterType);
    applyFilters(filterType, filterCompleted);
  };

  const handleToggle = (value) => {
    setFilteredCompleted(value);
    applyFilters(filterType, value);
  };

  return (
    <CardFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        withToggle={true}
        filterType={filterType}
        handleToggle={() => handleToggle(!filterCompleted)}
      />

      <CardHolder cards={filteredData} filterType={filteredData} />
    </CardFilterWrapper>
  );
}

export default CardFilter;
