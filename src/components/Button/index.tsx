import * as React from 'react';
import { StyledButton, colorFromStatus } from './StyledButton';
import { Size, Status } from 'utils/types';
import Icon from 'components/Icon';
import { ThemeConsumer, ThemeConsumerProps } from 'theme';
import Spinner from 'components/Spinner';
import { lightenDarkenColor } from 'utils';
import { SpinnerOverlay } from 'components/Spinner/StyledSpinner';

export type ButtonStatus = Status | 'outline' | 'control';

export interface ButtonProps extends ThemeConsumerProps {
  status?: ButtonStatus;
  children?: any;
  icon?: string;
  isLoading?: boolean;
  className?: string;
  size?: Size;
  disabled?: boolean;
  ghost?: boolean;
  outline?: boolean;
  iconPlacement?: 'right' | 'left';
  iconOnly?: boolean;
}

function Button(props: ButtonProps): JSX.Element {
  const { children, icon, isLoading } = props;

  function renderButtonWithIcon(icon: string) {
    if (props.iconPlacement && props.iconPlacement === 'right') {
      return (
        <>
          {children}
          <Icon type={icon} />
        </>
      );
    }
    return (
      <>
        <Icon type={icon} />
        {children}
      </>
    );
  }

  function renderButtonWithLoading() {
    const { size = 'medium' } = props;

    return (
      <StyledButton {...props}>
        <SpinnerOverlay>
          <Spinner
            size={size}
            width={20}
            borderWidth={4}
            color={lightenDarkenColor(colorFromStatus(props), 10)}
          />
        </SpinnerOverlay>
        {children}
      </StyledButton>
    );
  }

  function renderButton() {
    if (!children && icon) {
      <StyledButton iconOnly {...props}>
        <Icon type={icon} />
      </StyledButton>;
    }
    if (icon) {
      return <StyledButton {...props}>{renderButtonWithIcon(icon)}</StyledButton>;
    }
    if (isLoading) {
      return renderButtonWithLoading();
    }
    return <StyledButton {...props}>{children}</StyledButton>;
  }

  return <ThemeConsumer>{renderButton()}</ThemeConsumer>;
}

export default Button;
