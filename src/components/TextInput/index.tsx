import * as React from 'react';
import { ThemeConsumerProps, ThemeConsumer } from 'theme';
import { StyledTextInput, IconWrapper, LabelWrapper } from 'components/TextInput/StyledTextInput';
import { Status, Size } from 'utils';
import Icon from 'components/Icon';

export interface TextInputProps extends ThemeConsumerProps {
  value?: string
  placeholder?: string;
  size?: Size
  status?: Status;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: number;
  icon?: string;
  label?: string | (() => React.ReactElement);
  className?: string;
  id?: string;
  isClearable?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput(props: TextInputProps): React.ReactElement {
  const { onChange, isClearable, icon, value, width, fullWidth, label } = props;

  const [controlledValue, setValue] = React.useState<string | undefined>(value);

  function wrappedOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  }

  function clearInput(): void {
    setValue('');
  }

  function renderClearableInput() {
    return (
      <IconWrapper width={width} fullWidth={fullWidth} >
        <StyledTextInput onChange={wrappedOnChange} value={controlledValue} {...props}/>
        <span onClick={clearInput}>
          <Icon type="close" fill="outlined" onClick={clearInput}/>
        </span>
      </IconWrapper>
    )
  }

  function renderInputWithIcon() {
    return (
      <IconWrapper {...props} >
        <StyledTextInput
          onChange={wrappedOnChange}
          value={controlledValue}
          {...props as TextInputProps}
        />
        <span>
          <Icon type={icon as string} fill="outlined"/>
        </span>
      </IconWrapper>
    )
  }

  function renderLabeledInput() {
    if (isClearable) {
      return (
        <LabelWrapper>
          <p>{label}</p>
          {renderClearableInput()}
        </LabelWrapper>
      )
    }
    if (icon) {
      return (
        <LabelWrapper>
          <p>{label}</p>
          {renderInputWithIcon()}
        </LabelWrapper>
      )
    }
    return (
      <LabelWrapper>
        <p>{label}</p>
        <StyledTextInput onChange={wrappedOnChange} value={controlledValue} {...props}/>
      </LabelWrapper>
    )
  }

  function renderTextInput() {
    if (isClearable) {
      return renderClearableInput();
    }
    if (label) {
      return renderLabeledInput()
    }
    if (icon) {
      return renderInputWithIcon();
    }
    return <StyledTextInput onChange={wrappedOnChange} value={controlledValue} {...props}/>
  }

  return (
    <ThemeConsumer>{renderTextInput()}</ThemeConsumer>
  )
}

export default TextInput;
