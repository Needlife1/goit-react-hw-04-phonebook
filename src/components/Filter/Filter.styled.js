import styled from 'styled-components';

export const FilterStyled = styled('div')`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px;
  border: 2px solid greenyellow;
  background-color: black;
  gap: 15px;
  align-items: center;

  label {
    color: greenyellow;
  }

  input {
    margin-left: 20px;
    border: 1px solid greenyellow;
    height: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  label {
    color: greenyellow;
    font-weight: 700;
    font-size: 20px;
  }
`;
