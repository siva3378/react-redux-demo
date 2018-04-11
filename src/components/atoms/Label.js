import styled, { css } from 'styled-components';
import { colors } from '../../styles';

const Label = styled.label`
  font-size: 15px;
  padding: 0.25em 1em;
  display: block;
  text-align: left;

  ${props => props.inline && `
    display: inline;
  `}

  ${props => props.error && `
    color: ${colors.error};
  `}

  ${props => props.success && `
    color: ${colors.success};
  `}
`;

export default Label;