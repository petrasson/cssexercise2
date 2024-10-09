import CardHolder from "./CardHolder";
import FilterControl from "../../../shared-components/FilterControl";
import { useEffect, useState } from "react";

// import rData from "../../../../data.json";
// const { cards } = rData;

import styled from "styled-components";

const CardFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function CardFilter() {
  const [filterType, setFilterType] = useState("All");
  const [filteredData, setFilteredData] = useState(
    grantsData.filter((item) => item.completed === true)
  );
  const [filterCompleted, setFilteredCompleted] = useState(true);
  const [grantsData, setGrantsData] = useState([]);

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
        console.log(response.grants, "Fetched grants data");
      } catch (error) {
        console.error("Error fetching grants data:", error);
      }
    };
    getGrantsData();
  }, []);

  const categories = grantsData.map((card) => card.category);

  // Remove duplicates using Set
  const uniqueCategories = [...new Set(categories)];

  //Array to pass to the FilterControl
  const filterOptions = uniqueCategories.map((category) => ({
    text: category,
    value: category,
  }));

  const applyFilters = (category, completed) => {
    let newFilteredData = grantsData;

    //   // Filter by category if not "All"
    if (category !== "All") {
      newFilteredData = newFilteredData.filter(
        (item) => item.category === category
      );
    }

    //   // Filter by completion status
    if (completed) {
      newFilteredData = newFilteredData.filter(
        (item) => item.completed === true
      );
    } else {
      newFilteredData;
    }

    setFilteredData(newFilteredData);
  };

  const handleFilter = (filterType) => {
    setFilterType(filterType);
    applyFilters(filterType, filterCompleted);
  };

  const handleToggle = (value) => {
    setFilteredCompleted(value);
    applyFilters(filterType, value);
  };

  return (
    <CardFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={true}
        handleToggle={() => handleToggle(!filterCompleted)}
      />
      <CardHolder cards={grantsData} />
    </CardFilterWrapper>
  );
}

export default CardFilter;
