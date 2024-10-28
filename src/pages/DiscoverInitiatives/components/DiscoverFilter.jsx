import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import Initiatives from "./Initiatives";
import { useEffect, useState, useTransition } from "react";
import { fetchAllInitiatives } from "../../../services/Service";

const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DiscoverFilter() {
  const [isPending, startTransition] = useTransition();
  const [initiatives, setInitiatives] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredInitiatives, setFilteredInitiatives] = useState([]);

  useEffect(() => {
    const getInitiatives = async () => {
      // Start the transition to manage async data loading without blocking
      startTransition(async () => {
        const data = await fetchAllInitiatives();

        // Check that the data format is as expected and destructure initiatives
        if (data && data.initiatives) {
          setInitiatives(data.initiatives);
          setFilteredInitiatives(data.initiatives);
        } else {
          console.error("Unexpected data format:", data);
        }
      });
    };

    getInitiatives();
  }, []);

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

    let newFilteredInitiatives = initiatives;

    if (filterType !== "All") {
      newFilteredInitiatives = newFilteredInitiatives?.filter(
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

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <Initiatives cards={filteredInitiatives} />
      )}
    </DiscoverFilterWrapper>
  );
}

export default DiscoverFilter;
