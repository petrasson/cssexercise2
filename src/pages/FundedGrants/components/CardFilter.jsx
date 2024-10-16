import CardHolder from "./CardHolder";
import FilterControl from "../../../shared-components/FilterControl";
import { useEffect, useState } from "react";

import styled from "styled-components";

const CardFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function CardFilter() {
  const [grantsData, setGrantsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filterCompleted, setFilteredCompleted] = useState(true);

  useEffect(() => {
    const getGrantsData = async () => {
      try {
        const data = await fetch(
          "https://nextjs-test-beryl-gamma.vercel.app/api/grants"
        );
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const response = await data.json();
        setGrantsData(response.grants);
      } catch (error) {
        console.error("Error fetching grants data:", error);
      }
    };
    getGrantsData();
  }, []);

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
      <CardHolder cards={filteredData} />
    </CardFilterWrapper>
  );
}

export default CardFilter;
