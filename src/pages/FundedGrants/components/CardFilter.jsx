import CardHolder from "./CardHolder";
import FilterControl from "../../../shared-components/FilterControl";
import { useEffect, useState } from "react";
import { fetchGrants, fetchGrantees } from "../../../services/CardService";

import styled from "styled-components";

const CardFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function CardFilter() {
  const [grantsData, setGrantsData] = useState([]);
  const [granteesData, setGranteesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filterCompleted, setFilteredCompleted] = useState(true);

  //Fetch grants data to render

  useEffect(() => {
    const getGrantsData = async () => {
      const { grants: cardsData } = await fetchGrants();
      setGrantsData(cardsData);
    };
    getGrantsData();
  }, []);

  //Fetch grantees data to render their images on each card

  useEffect(() => {
    const fetchGranteesData = async () => {
      if (Array.isArray(grantsData) && grantsData.length > 0) {
        const granteeIds = grantsData.flatMap(
          (card) => card.grantees_ids || []
        );
        if (granteeIds.length > 0) {
          const granteesData = await fetchGrantees(granteeIds);
          setGranteesData(granteesData);
        } else {
          console.log("No grantees data found.");
        }
      }
    };

    fetchGranteesData(); // Fetch grantee data to render users URL on cards
  }, [grantsData]);

  useEffect(() => {
    let newFilteredData = grantsData;

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
  }, [grantsData, filterType, filterCompleted]);

  const handleFilter = (selectedFilterType) => {
    setFilterType(selectedFilterType);
  };

  const handleToggle = (filterCompleted) => {
    setFilteredCompleted(filterCompleted);
  };

  const categories = grantsData.map((card) => card.category);
  const uniqueCategories = [...new Set(categories)];

  const filterOptions = uniqueCategories.map((category) => ({
    text: category,
    value: category,
  }));

  return (
    <CardFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={true}
        handleToggle={() => handleToggle(!filterCompleted)}
      />
      <CardHolder cards={filteredData} granteeData={granteesData} />
    </CardFilterWrapper>
  );
}

export default CardFilter;
