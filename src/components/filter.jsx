import { StyledFilter } from "./styles/Filter.styled";
import PropTypes from "prop-types";

function Filter({ handleFilter }) {
  return (
    <StyledFilter>
      <li>
        <button
          className='menu-filter'
          onClick={() => handleFilter("Technical/Tool Development")}
        >
          Technical/Tool Development
        </button>
      </li>
      <li>
        <button
          className='menu-filter'
          onClick={() => handleFilter("Governance")}
        >
          Governance
        </button>
      </li>
      <li>
        <button
          className='menu-filter'
          onClick={() => handleFilter("Growth / Marketing")}
        >
          Growth / Marketing
        </button>
      </li>
      <li>
        <button
          className='menu-filter'
          onClick={() => handleFilter("Analytics")}
        >
          Analytics
        </button>
      </li>
      <li>
        <button
          className='menu-filter'
          onClick={() => handleFilter("Third Party Provider")}
        >
          Third Party Provider
        </button>
      </li>
    </StyledFilter>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;

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
