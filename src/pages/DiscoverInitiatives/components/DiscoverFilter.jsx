import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import Initiatives from "./Initiatives";
import { useEffect, useState } from "react";

const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DiscoverFilter({ initiatives }) {
  const [filterType, setFilterType] = useState("All");
  const [filteredData, setFilteredData] = useState(initiatives);
  const status = initiatives.map((initiative) => initiative.status);

  useEffect(() => {
    setFilteredData(initiatives);
  }, [initiatives]);

  //Remove duplicates using Set
  const uniqueStatus = [...new Set(status)];

  //Create the filterOptions array to pass to the FilterControl
  const filterOptions = uniqueStatus.map((status) => ({
    text: status,
    value: status,
  }));

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    let newFilteredData = initiatives;

    if (filterType !== "All") {
      newFilteredData = newFilteredData.filter(
        (initiative) => initiative.status === filterType
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
