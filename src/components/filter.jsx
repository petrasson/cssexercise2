import { StyledFilter } from "./styles/Filter.styled";
import Button from "./Button";
import PropTypes from "prop-types";

function Filter({ handleFilter }) {
  return (
    <StyledFilter>
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
