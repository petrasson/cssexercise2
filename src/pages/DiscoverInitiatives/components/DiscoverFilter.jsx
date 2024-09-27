import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import Initiatives from "./Initiatives";
import React, { useState } from "react";
import rData from "../../../../dataDiscovery.json";

const { cards } = rData;

const categories = cards.map((card) => card.category);

//Remove duplicates using Set
const uniqueCategories = [...new Set(categories)];

//Create the filterOptions array to pass to the FilterControl
const filterOptions = uniqueCategories.map((category) => ({
  text: category,
  value: category,
}));

const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DiscoverFilter() {
  const [filterType, setFilterType] = useState("All");
  const [filteredData, setFilteredData] = useState(cards);

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    let newFilteredData = cards;

    if (filterType !== "All") {
      newFilteredData = newFilteredData.filter(
        (item) => item.category === filterType
      );
    }
    setFilteredData(newFilteredData);
  };

  return (
    <DiscoverFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={false}
      />
      <Initiatives cards={filteredData} />
    </DiscoverFilterWrapper>
  );
}

export default DiscoverFilter;
