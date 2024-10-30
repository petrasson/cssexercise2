import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import Initiatives from "./Initiatives";
import { useEffect, useState, useTransition, Suspense } from "react";
import { fetchAllInitiatives } from "../../../services/Service";
import LottieAnimation from "../../../shared-components/LottieAnimation";
// import { useQuery } from 'react-query'

const DiscoverFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DiscoverFilter() {
  // const {  data } = useQuery('initiatives', fetchAllInitiatives)

  const [isPending, startTransition] = useTransition();
  const [initiatives, setInitiatives] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredInitiatives, setFilteredInitiatives] = useState([]);

  //fetch data initially

  useEffect(() => {
    const getInitiatives = async () => {
      const data = await fetchAllInitiatives();
      if (data && data.initiatives) {
        setInitiatives(data.initiatives);
        setFilteredInitiatives(data.initiatives);
      } else {
        console.error("Unexpected data format:", data);
      }
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

    //adding transition to ensure that the UI stays responsive if the filtering operation takes time

    startTransition(() => {
      let newFilteredInitiatives = initiatives;

      if (filterType !== "All") {
        newFilteredInitiatives = newFilteredInitiatives.filter(
          (initiative) => initiative.status === filterType
        );
      }
      setFilteredInitiatives(newFilteredInitiatives);
    });
  };

  return (
    <Suspense fallback={<LottieAnimation />}>
      <DiscoverFilterWrapper>
        <FilterControl
          handleFilter={handleFilter}
          filterType={filterType}
          filterOptions={filterOptions}
          withToggle={false}
        />

        {isPending ? (
          <div>Filtering...</div> // showing during filtering transitions
        ) : (
          <Initiatives cards={filteredInitiatives} />
        )}
      </DiscoverFilterWrapper>
    </Suspense>
  );
}

export default DiscoverFilter;
