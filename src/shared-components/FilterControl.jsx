import Button from './Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from '../pages/FundedGrants/components/Toggle';

const FilterControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    list-style-type: none;
  }

  .filter-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    z-index: 3;
    margin-bottom: 20px;

    // .filter-wrapper {
    //   gap: 10px;
    // }
  }

  .filter-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgb(35 35 52 / 0%),
      rgb(35 35 52 / 100%)
    );
    z-index: 5;
    pointer-events: none;
  }

  .filter-container::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 2px;
    background-image: url("../../images/rightarrow.svg");
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    z-index: 9;
    background-repeat: no-repeat;
    pointer-events: none;
  }

  .filter-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 65px;
    overflow-x: auto;
    scrollbar-width: none;
    color: var(--secondary-text-color);
    position: relative;
    z-index: 4;
  }

  @media only screen and (width >= 1305px) {
    .filter-container {
      overflow: visible;

      .filter-wrapper {
        gap: 60px;
      }
    }

    .filter-container::before,
    .filter-container::after {
      display: none;
    }

    .filter-wrapper {
      overflow-x: hidden;
    }
  }
`;

function FilterControl({
  handleFilter,
  withToggle,
  handleToggle,
  filterOptions,
  filterType,
}) {
  return (
    <FilterControlWrapper>
      <div className="filter-container">
        <Button
          text="All"
          type="primary"
          filterType="All"
          onClick={() => handleFilter('All')}
        />

        <div className="filter-wrapper">
          {filterOptions.map((option) => (
            <li key={option.value}>
              <Button
                text={option.text}
                type="text"
                filterType={option.value}
                highlight={filterType === option.value}
                onClick={() => handleFilter(option.value)}
              />
            </li>
          ))}
        </div>
      </div>
      {withToggle && (
        <div className="toggle-container">
          <Toggle onClick={handleToggle} />
        </div>
      )}
    </FilterControlWrapper>
  );
}

FilterControl.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterType: PropTypes.string,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  withToggle: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default FilterControl;
