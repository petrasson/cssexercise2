import Button from "./Button";
import PropTypes from "prop-types";
import styled from "styled-components";
import Toggle from "../pages/funded-grants/components/Toggle";

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

    .filter-wrapper {
      gap: 10px;
    }
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
    align-items: start;
    gap: 10px;
    margin: 0px;
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
      gap: 60px;
    }
  }
`;

function FilterControl({ handleFilter, withToggle }) {
  return (
    <FilterControlWrapper>
      <div className='filter-container'>
        <Button
          text='All'
          type='primary'
          filterType='All'
          onClick={() => handleFilter("All")}
        />
        <div className='filter-wrapper'>
          <li>
            <Button
              text='Technical/Tool Development'
              type='text'
              filterType='Technical/Tool Development'
              onClick={() => handleFilter("Technical/Tool Development")}
            />
          </li>
          <li>
            <Button
              text='Governance'
              type='text'
              filterType='Governance'
              onClick={() => handleFilter("Governance")}
            />
          </li>
          <li>
            <Button
              text='Growth / Marketing'
              type='text'
              filterType='Growth / Marketing'
              onClick={() => handleFilter("Growth / Marketing")}
            />
          </li>
          <li>
            <Button
              text='Analytics'
              type='text'
              filterType='Analytics'
              onClick={() => handleFilter("Analytics")}
            />
          </li>
          <li>
            <Button
              text='Third Party Provider'
              type='text'
              filterType='Third Party Provider'
              onClick={() => handleFilter("Third Party Provider")}
            />
          </li>
        </div>
      </div>
      {withToggle && (
        <div className='toggle-container'>
          <Toggle />
        </div>
      )}
    </FilterControlWrapper>
  );
}

FilterControl.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  withToggle: PropTypes.bool,
};

export default FilterControl;
