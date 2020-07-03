import styled, { css } from "styled-components";
import { TextInputProps } from "components/TextInput";
import { transitions, Size, lightenDarkenColor, disabledDark } from "utils";

const getFontSize = (size: Size = 'medium'): string => {
  switch(size) {
    case 'tiny':
      return '0.75rem'
    case 'small':
      return '0.8125rem'
    case 'medium':
    case 'large':
      return '0.9375rem'
    case 'giant':
      return '1.125rem'
    default:
      return '0.9375rem'
  }
}

const getPadding = (size?: Size): string => {
  switch(size) {
    case 'tiny':
    case 'small':
      return '0.1875rem 1.125rem'
    case 'medium':
      return '0.4375rem 1.125rem'
    case 'large':
      return '0.6875rem 1.125rem'
    case 'giant':
      return '0.9375rem 1.125rem'
    default:
      return '0.4375rem 1.125rem'
  }
}

const BaseStyles = (props: TextInputProps) => css`
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  font-weight: 600;
  line-height: 1.5rem;
  font-size: ${getFontSize(props.size)};
  padding: ${getPadding(props.size)}
  max-width: ${!props.fullWidth && !props.width ? '20rem' : '100%'};
  width: ${props.width && `${props.width}px`};
  background-color: #f7f9fc;
  color: #222b45
  border-color: ${props?.theme?.colors[props?.status || 'primary']}
`

const HoverStyles = (props: TextInputProps) => css`
  &:hover {
    background-color: #edf1f7;
    border-color: ${lightenDarkenColor(props?.theme?.colors[props?.status || 'primary'], -10)}
  }
`
const FocusStyles = (props: TextInputProps) => css`
  &:focus {
    outline: none;
    background-color: #fff;
    border-color: ${lightenDarkenColor(props?.theme?.colors[props?.status || 'primary'], 10)}
  }
`

const DisabledStyles =  css`
  color: ${disabledDark};
  background-color: #f7f9fc;
  border-color: #e4e9f2;
  pointer-events: none;
`

const IconWrapper = styled.div<TextInputProps>`
  display: inline-block;
  max-width: ${props => !props.fullWidth && !props.width ? '20rem' : '100%'};
  height: auto;
  position: relative;
  span {
    display: inline-flex;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: ${props => props.isClearable && 'pointer'}
  }
`

const LabelWrapper = styled.div<TextInputProps>`
  display: inline-block;
  max-width: ${props => !props.fullWidth && !props.width ? '20rem' : '100%'};
  position: relative;
  p {
    font-size: 0.825rem;
    color: ${disabledDark};
    font-weight: 600;
    margin: 8px 0;
    text-transform: uppercase;
    color: #8992A3
  }
`

const StyledTextInput = styled.input<TextInputProps>`
  ${props => BaseStyles(props)}
  ${props => HoverStyles(props)}
  ${props => FocusStyles(props)}
  ${props => props.disabled && DisabledStyles}
  ${transitions(['border-color', 'box-shadow', 'background-color'], 0.15, 'ease-in')}
`;

export { StyledTextInput, IconWrapper, LabelWrapper }
