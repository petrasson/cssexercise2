import CardHolder from './CardHolder';
import FilterControl from '../../../shared-components/FilterControl';
import { useEffect, useState, useTransition } from 'react';
import { fetchAllGrants, fetchGrantees } from '../../../services/Service';
import { Suspense } from 'react';
import LottieAnimation from '../../../shared-components/LottieAnimation';

import styled from 'styled-components';

const CardFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function CardFilter() {
  const [isPending, startTransition] = useTransition();
  const [grantsData, setGrantsData] = useState([]);
  const [granteesData, setGranteesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [filterCompleted, setFilteredCompleted] = useState(true);

  // Fetch data on page load
  useEffect(() => {
    const getData = async () => {
      try {
        const { grants: cardsData } = await fetchAllGrants();
        setGrantsData(cardsData);

        // Fetch grantees data based on fetched grants
        if (Array.isArray(cardsData) && cardsData.length > 0) {
          const granteeIds = cardsData.flatMap(
            (card) => card.grantees_ids || [],
          );

          if (granteeIds.length > 0) {
            const fetchedGranteesData = await fetchGrantees(granteeIds);
            setGranteesData(fetchedGranteesData);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    startTransition(() => {
      let newFilteredData = grantsData;

      if (filterType !== 'All') {
        newFilteredData = newFilteredData.filter(
          (item) => item.category === filterType,
        );
      }

      if (filterCompleted) {
        newFilteredData = newFilteredData.filter(
          (item) => item.completed === true,
        );
      }

      setFilteredData(newFilteredData);
    });
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
    <Suspense fallback={<LottieAnimation />}>
      <CardFilterWrapper>
        <FilterControl
          handleFilter={handleFilter}
          filterType={filterType}
          filterOptions={filterOptions}
          withToggle={true}
          handleToggle={() => handleToggle(!filterCompleted)}
        />
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <CardHolder cards={filteredData} granteeData={granteesData} />
        )}
      </CardFilterWrapper>
    </Suspense>
  );
}

export default CardFilter;
