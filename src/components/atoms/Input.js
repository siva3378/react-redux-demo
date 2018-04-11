import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 5px;
  line-height: 30px;
  font-size: 20px;
  margin: 0.5em;
  color: black;
  background: white;
  border: 1px solid gray;

  ${props => props.error && css`
    border-color: red;
  `}

  ${props => props.success && css`
    border-color: green;
  `}
`;

export default Input;