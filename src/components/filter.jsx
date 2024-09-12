import { StyledFilter } from "./styles/Filter.styled";

function Filter() {
  return (
    <StyledFilter>
      <li>
        <button
          className='menu-filter'
          data-filter='Technical/Tool Development'
        >
          Technical/Tool Development
        </button>
      </li>
      <li>
        <button className='menu-filter' data-filter='Governance'>
          Governance
        </button>
      </li>
      <li>
        <button className='menu-filter' data-filter='Growth / Marketing'>
          Growth/Marketing
        </button>
      </li>
      <li>
        <button className='menu-filter' data-filter='Analytics'>
          Analytics
        </button>
      </li>
      <li>
        <button className='menu-filter' data-filter='Third Party Provider'>
          Third party provider
        </button>
      </li>
    </StyledFilter>
  );
}
export default Filter;
