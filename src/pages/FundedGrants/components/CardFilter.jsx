import CardHolder from "./CardHolder";
import FilterControl from "../../../shared-components/FilterControl";
import { useEffect, useState } from "react";
// import { useAllGrants, fetchGranteeById } from "../../../services/Service"; remove fetch here, see below
import { useAllGrants } from "../../../services/Service";

import styled from "styled-components";

const CardFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: solid red 1px;
`;

function CardFilter() {
  const {
    data: grantsData,
    isLoading: grantsLoading,
    error: grantsError,
  } = useAllGrants();

  const grants = grantsData?.grants || [];
  console.log({ grants });
  const [filteredData, setFilteredData] = useState([]); //fetch all grants data
  const [filterType, setFilterType] = useState("All");
  const [filterCompleted, setFilteredCompleted] = useState(true);
  // const [granteesData, setGranteesData] = useState([]);

  useEffect(() => {
    if (grants.length > 0) {
      setFilteredData(grants);

      // Fetch grantee details individually for each grantee ID
      //     const fetchGrantees = async () => {
      //       const allGranteeData = await Promise.all(
      //         grants.flatMap((grant) =>
      //           (grant.grantees_ids || []).map(async (id) => {
      //             const grantee = await fetchGranteeById(id);

      //             return grantee;
      //           })
      //         )
      //       );

      //       // Filter out any `null` results (in case of fetch errors) and update state
      //       setGranteesData(allGranteeData.filter(Boolean));
      //       console.log({ allGranteeData });
      //     };
      //     fetchGrantees();
    }
  }, [grants]);

  if (grantsLoading) return <div>Loading...</div>;
  if (grantsError) return <div>Error loading grants data.</div>;

  useEffect(() => {
    let newFilteredData = grants;

    if (filterType !== "All") {
      newFilteredData = newFilteredData.filter(
        (item) => item.category === filterType
      );
    }

    if (filterCompleted) {
      newFilteredData = newFilteredData.filter(
        (item) => item.completed === true
      );
    }

    setFilteredData(newFilteredData);
  }, [grants, filterType, filterCompleted]);

  const handleFilter = (selectedFilterType) => {
    setFilterType(selectedFilterType);
  };

  const handleToggle = (filterCompleted) => {
    setFilteredCompleted(filterCompleted);
  };

  const categories = grants.map((card) => card.category);
  const uniqueCategories = [...new Set(categories)];

  const filterOptions = uniqueCategories.map((category) => ({
    text: category,
    value: category,
  }));
  // console.log("granteesData", granteesData);
  return (
    <CardFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={true}
        handleToggle={() => handleToggle(!filterCompleted)}
      />
      {/* <CardHolder cards={filteredData} granteeData={granteesData} /> */}
      <CardHolder cards={filteredData} />
    </CardFilterWrapper>
  );
}

export default CardFilter;
