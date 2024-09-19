import Button from "./Button";
import PropTypes from "prop-types";
import styled from "styled-components";
import Toggle from "../pages/funded-grants/components/Toggle";

const FilterControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 60px;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  color: var(--secondary-text-color);
  position: relative;
  scrollbar-width: none;
  width: 100%;
  display: flex;
  scrollbar-width: none;

  :first-child {
    min-width: 50px;
  }

  li {
    list-style-type: none;
  }

  // .menu-filter {
  //   min-width: 150px;
  //   position: relative;
  //   z-index: 4;
  //   border: none;
  //   color: var(--primary-text-color);
  //   font-size: 15px;
  //   cursor: pointer;
  //   background-color: transparent;

    &._discover {
      min-width: 100px;
    }
  }

  @media only screen and (width >= 1305px) {
    display: flex;
    padding: 0;
    overflow-x: hidden;
    width: auto;
    gap: 15px;
    font-size: 16px;
    line-height: 24px;
  }
`;

function FilterControl({ handleFilter, withToggle }) {
  return (
    <FilterControlWrapper>
      <Button
        text='All'
        type='primary'
        filterType='All'
        onClick={() => handleFilter("All")}
      />
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
      ${withToggle && <Toggle />}
    </FilterControlWrapper>
  );
}

FilterControl.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  withToggle: PropTypes.bool,
};

export default FilterControl;

// <li>
//         <button
//           className='menu-filter'
//           data-filter='Technical/Tool Development'
//         >
//           Technical/Tool Development
//         </button>
//       </li>
//       <li>
//         <button className='menu-filter' data-filter='Governance'>
//           Governance
//         </button>
//       </li>
//       <li>
//         <button className='menu-filter' data-filter='Growth / Marketing'>
//           Growth/Marketing
//         </button>
//       </li>
//       <li>
//         <button className='menu-filter' data-filter='Analytics'>
//           Analytics
//         </button>
//       </li>
//       <li>
//         <button className='menu-filter' data-filter='Third Party Provider'>
//           Third party provider
//         </button>
//       </li>
