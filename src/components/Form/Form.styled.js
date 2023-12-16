import styled from 'styled-components';

export const FormStyled = styled('form')`
  width: 300px;
  border: 2px solid greenyellow;
  padding: 16px;
  background-color: black;

  label {
    color: greenyellow;
    font-weight: 700;
    font-size: 20px;
  }

  input {
    margin-left: 20px;
    border: 1px solid greenyellow;
    height: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  button {
    padding: 15px 30px;
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 50%;
    transition: 0.5s;
    background: #1e1e1e;
    color: greenyellow;
    box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;
  }

  button:hover {
    animation: a 0.5s 1 linear;
  }

  @keyframes a {
    0% {
      transform: scale(0.7, 1.3);
    }

    25% {
      transform: scale(1.3, 0.7);
    }

    50% {
      transform: scale(0.7, 1.3);
    }

    75% {
      transform: scale(1.3, 0.7);
    }

    100% {
      transform: scale(1, 1);
    }
  }
`;
