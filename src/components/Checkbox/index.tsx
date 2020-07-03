import * as React from 'react';
import { ThemeConsumerProps, ThemeConsumer } from 'theme';
import {StyledCheckbox} from 'components/Checkbox/StyledCheckbox';
import { Status } from 'utils';
import Icon from 'components/Icon';
import { CSSObject } from 'styled-components';

export interface CheckboxProps extends ThemeConsumerProps {
  status?: Status;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  labelStyle?: CSSObject
}

function Checkbox(props: CheckboxProps) {
  const {
    onChange,
    label,
    checked = false,
    indeterminate,
    status,
    disabled,
    labelStyle
  } = props;

  const [isChecked, setChecked] = React.useState<boolean>(checked);

  function wrappedOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {disabled} = props;
    const { checked } = event.target;
    !disabled && setChecked(checked);
    onChange && !disabled && onChange(event, checked);
  }

  function renderCheckbox() {
    return (
      <StyledCheckbox
        status={status}
        indeterminate={indeterminate}
        checked={isChecked}
        disabled={disabled}
        labelStyle={labelStyle}
      >
        <React.Fragment>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={wrappedOnChange}
            hidden
          />
          <span>
            <Icon type={indeterminate ? "minus" : "checkmark"} fill="outlined"/>
          </span>
          {label && <span>{label}</span>}
        </React.Fragment>
      </StyledCheckbox>
    )
  }

  return <ThemeConsumer>{renderCheckbox()}</ThemeConsumer>
}

export default Checkbox;
