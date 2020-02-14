import * as React from 'react';
import { Size } from 'utils';
import { StyledSpinner } from 'components/Spinner/StyledSpinner';
import { ThemeConsumer, ThemeConsumerProps } from 'theme';
export interface SpinnerProps extends ThemeConsumerProps {
  size?: Size;
  color?: string;
  width?: number;
  borderWidth?: number
}

function Spinner(props: SpinnerProps): JSX.Element {
  return (
    <ThemeConsumer>
      <StyledSpinner {...props} />
    </ThemeConsumer>
  );
}

export default Spinner;
