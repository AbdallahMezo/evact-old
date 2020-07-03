import styled from 'styled-components';
import { SpinnerProps } from 'components/Spinner';
import { getSizePixels } from 'utils';
import { spin } from 'utils/styles/animation';

const spinnerWidth = (props: SpinnerProps) => {
  return props.width ? props.width : getSizePixels(props.size);
};

const borderWidth = (props: SpinnerProps) => {
  return props.borderWidth ? props.borderWidth : (getSizePixels(props.size) / 6)
}

const borderColor = (props: SpinnerProps) => {
  const color = props.color ? props.color : props?.theme?.colors.primary;
  return `${color} transparent ${color} ${color}`;
}

const SpinnerOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.7);
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSpinner = styled.span<SpinnerProps>`
  display: block;
  width: ${props => spinnerWidth(props)}px;
  height: ${props => spinnerWidth(props)}px;
  border-width: ${props => borderWidth(props)}px;
  border-style: solid;
  border-color: ${props => borderColor(props)};
  border-radius: 50%;
  ${spin};
`;

export { StyledSpinner, SpinnerOverlay };
