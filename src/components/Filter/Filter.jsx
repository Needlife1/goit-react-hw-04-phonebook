import { FilterStyled } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <FilterStyled>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      />
    </FilterStyled>
  );
}
