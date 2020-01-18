import * as React from 'react';
import { StyledButton } from './Styled';
import { Size } from 'utils/types';
import Icon from 'components/Icon';
import { ThemeConsumer, ThemeConsumerProps } from 'theme';

export type ButtonStatus =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'outline'
  | 'control';

export interface ButtonProps extends ThemeConsumerProps {
  status?: ButtonStatus;
  children: any;
  icon?: string;
  isLoading?: boolean;
  className?: string;
  size?: Size;
  disabled?: boolean;
  ghost?: boolean;
  outline?: boolean;
  iconPlacement?: 'right' | 'left';
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
    return (
      <StyledButton {...props}>
        <span>
          <Icon type="github" />
        </span>
        <span>{children}</span>
      </StyledButton>
    );
  }

  function renderButton() {
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
