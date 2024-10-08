import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import Initiatives from "./Initiatives";
import { useState } from "react";
import rData from "../../../../data.json";

const { cards } = rData;

const status = cards.map((card) => card.status);

//Remove duplicates using Set
const uniqueStatus = [...new Set(status)];

//Create the filterOptions array to pass to the FilterControl
const filterOptions = uniqueStatus.map((status) => ({
  text: status,
  value: status,
}));

const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DiscoverFilter({ initiatives }) {
  const [filterType, setFilterType] = useState("All");
  console.log({ initiatives, cards });
  const [filteredData, setFilteredData] = useState(cards);

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    let newFilteredData = cards;

    if (filterType !== "All") {
      newFilteredData = newFilteredData.filter(
        (item) => item.status === filterType,
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
