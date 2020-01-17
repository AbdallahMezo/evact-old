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
}

function Button(props: ButtonProps): JSX.Element {
  const { children, icon, isLoading } = props;
  function renderButtonWithIcon() {
    return (
      <StyledButton {...props}>
        <Icon type={icon as string} width="12" />
        {children}
      </StyledButton>
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
      return renderButtonWithIcon();
    }
    if (isLoading) {
      return renderButtonWithLoading();
    }
    return <StyledButton {...props}>{children}</StyledButton>;
  }
  return <ThemeConsumer>{renderButton()}</ThemeConsumer>;
}

export default Button;
