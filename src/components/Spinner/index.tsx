import * as React from 'react';
import { Size } from 'utils';
import { StyledSpinner } from 'components/Spinner/StyledSpinner';

export interface SpinnerProps {
  size?: Size;
  color?: string;
}

function Spinner(props: SpinnerProps): JSX.Element {
  return <StyledSpinner {...props} />;
}

export default Spinner;
