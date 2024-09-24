import styled from "styled-components";
import FilterControl from "../../../shared_components/FilterControl";
import DiscoveryCard from "./InitiativeCard";
// import DiscoverHolder from "./DiscoverHolder";
// import React, { useState } from "react";
// import rData from "../../../../data.json";
// const { cards } = rData;

const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DiscoverFilter() {
  // const [filterType, setFilterType] = useState("All");
  // const [filteredData, setFilteredData] = useState(
  //   cards.filter((item) => item.completed === true)
  // );
  // const [filterCompleted, setFilteredCompleted] = useState(true);

  // const applyFilters = (category, completed) => {
  //   let newFilteredData = cards;

  //   // Filter by category if not "All"
  //   if (category !== "All") {
  //     newFilteredData = newFilteredData.filter(
  //       (item) => item.category === category
  //     );
  //   }

  //   // Filter by completion status
  //   if (completed) {
  //     newFilteredData = newFilteredData.filter(
  //       (item) => item.completed === true
  //     );
  //   } else {
  //     newFilteredData;
  //   }

  //   setFilteredData(newFilteredData);
  // };

  // const handleFilter = (filterType) => {
  //   setFilterType(filterType);
  //   applyFilters(filterType, filterCompleted);
  // };

  // const handleToggle = (value) => {
  //   setFilteredCompleted(value);
  //   applyFilters(filterType, value);
  // };

  return (
    <DiscoverFilterWrapper>
      <FilterControl
        // handleFilter={handleFilter}
        withToggle={false}
        filterType={filterType}
        // handleToggle={() => handleToggle(!filterCompleted)}
      />

      {/* <CardHolder cards={filteredData} filterType={filteredData} />  */}

      {/* <DiscoverHolder /> */}
      <DiscoveryCard />
    </DiscoverFilterWrapper>
  );
}

export default DiscoverFilter;
