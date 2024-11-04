
import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import Initiatives from "./Initiatives";
import { useState, useEffect } from "react";
import { useAllInitiatives } from "../../../services/Service";


const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function DiscoverFilter() {

  const { data, isLoading, error } = useAllInitiatives();
  const initiatives = data?.initiatives || [];
  const [filterType, setFilterType] = useState("All");
  const [filteredInitiatives, setFilteredInitiatives] = useState(initiatives);

  useEffect(() => {
    if (data?.initiatives) {
      setFilteredInitiatives(data.initiatives);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;


  //fetch data initially
  /*** HANDLE AND UPDATE FILTERED DATA BASED ON STATUS ***/
  const status = initiatives.map((initiative) => initiative.status);

  //Remove duplicates using Set
  const uniqueStatus = [...new Set(status)];

  //Create the filterOptions array to pass to the FilterControl
  const filterOptions = uniqueStatus.map((status) => ({
    text: status,
    value: status,
  }));

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    //adding transition to ensure that the UI stays responsive if the filtering operation takes time

    let newFilteredInitiatives = initiatives;


    if (filterType !== "All") {
      newFilteredInitiatives = newFilteredInitiatives.filter(
        (initiative) => initiative.status === filterType

      );
    }
    setFilteredInitiatives(newFilteredInitiatives);
  };

  return (

    <DiscoverFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={false}
      />
      <Initiatives cards={filteredInitiatives} />
    </DiscoverFilterWrapper>

  );
}

export default DiscoverFilter;
