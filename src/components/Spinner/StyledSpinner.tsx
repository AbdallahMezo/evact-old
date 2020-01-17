import styled from 'styled-components';
import { SpinnerProps } from 'components/Spinner';
import { getSizePixels } from 'utils';
import { spin } from 'utils/styles/animation';

const StyledSpinner = styled.span<SpinnerProps>`
  display: inline-block;
  width: ${props => getSizePixels(props.size || 'medium')}px;
  height: ${props => getSizePixels(props.size || 'medium')}px;
  border: ${props => getSizePixels(props.size || 'medium') / 6}px solid
    ${props => props.color || 'green'};
  border-top: ${props => getSizePixels(props.size || 'medium') / 6}px solid transparent;
  border-radius: 50%;
  ${spin};
`;

export { StyledSpinner };
