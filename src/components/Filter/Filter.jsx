import { Component } from 'react';
import { FilterStyled } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterStyled>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          id="filter"
          type="text"
          name="filter"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </FilterStyled>
    );
  }
}
