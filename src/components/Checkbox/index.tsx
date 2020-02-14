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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => unknown;
  labelStyle?: CSSObject
}

function Checkbox(props: CheckboxProps) {
  const { onChange, label, checked = false, status, indeterminate } = props;

  const [isChecked, setChecked] = React.useState<boolean>(checked);

  function wrappedOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    setChecked(checked);
    onChange && onChange(event, checked);
  }

  function renderCheckbox() {
    return (
      <StyledCheckbox checked={isChecked} status={status} indeterminate={indeterminate}>
        <React.Fragment>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={wrappedOnChange}
            hidden
          />
          <span>
            <Icon type={indeterminate ? "minus" : "checkmark"} width="70%" fill="outlined"/>
          </span>
          {label && <span>{label}</span>}
        </React.Fragment>
      </StyledCheckbox>
    )
  }

  return <ThemeConsumer>{renderCheckbox()}</ThemeConsumer>
}

export default Checkbox;
