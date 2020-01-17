import styled, { css } from 'styled-components';
import { ButtonProps, ButtonStatus } from 'components/Button';
import { lightenDarkenColor, Size } from 'utils';
import { transitions } from 'utils/styles/animation';

const boxShadow = `box-shadow: 0 0 0px 8px rgba(143, 155, 179, 0.16);`;

const isControl = (status: ButtonStatus) => status === 'control';

// @ts-ignore
const isOutline = (props: ButtonProps) => props.outline;

const getPadding = (size: Size): string => {
  switch (size) {
    case 'tiny':
      return `0.3125rem 0.625rem`;
    case 'small':
      return `0.4375rem 0.875rem`;
    case 'medium':
      return `0.657rem 1.125rem`;
    case 'large':
      return `0.8125rem 1.125rem`;
    case 'giant':
      return `1rem 1.375rem`;
    default:
      return `0.657rem 1.125rem`;
  }
};

const getFontSize = (size: Size): string => {
  switch (size) {
    case 'tiny':
      return `0.625rem`;
    case 'small':
      return `0.75rem`;
    case 'medium':
      return `0.875rem`;
    case 'large':
      return `1rem`;
    case 'giant':
      return `1.125rem`;
    default:
      return `0.875rem`;
  }
};

const colorStringFromType = (props: ButtonProps): string => {
  if (props.status === 'control') {
    return 'transparent';
  }
  // FIXME:
  // @ts-ignore
  return props.status ? props.theme.colors[props.status] : props.theme.colors.primary;
};

const getButtonSize = (props: ButtonProps) => `
  font-size: ${getFontSize(props.size || 'medium')};
`;

const ButtonControlColors = () => `
  background-color: transparent;
  color: #000;
`;

const getButtonColors = (props: ButtonProps) => `
  ${
    props.status && isControl(props.status)
      ? ButtonControlColors()
      : `
        background-color: ${colorStringFromType(props)};
        color: #fff;
      `
  }
`;

const getDisabledStyles = () => `
  background-color: rgba(143, 155, 179, 0.24);
  color: rgba(143, 155, 179, 0.48)
`;

const BaseStyle = (props: ButtonProps) => css`
  text-transform: uppercase;
  border-radius: 4px;
  border-width: 0.0625rem;
  border-color: ${colorStringFromType(props)};
  border: none;
  cursor: pointer;
  font-weight: 700;
  padding: ${getPadding(props.size || 'medium')} ${getButtonColors(props)};
  ${props.status && isControl(props.status) && ButtonControlColors()} ${getButtonSize(props)};
  ${props.disabled && getDisabledStyles()}
`;

const HoverStyle = (props: ButtonProps) => css`
  &:hover {
    background-color: ${lightenDarkenColor(colorStringFromType(props), 10)};
    border-color: ${colorStringFromType(props)};
  }
`;

const FocusStyle = (props: ButtonProps) => css`
  &:focus {
    ${boxShadow}
    outline: none;
    background-color: ${colorStringFromType(props)};
    border-color: ${colorStringFromType(props)};
  }
`;

const ActiveStyle = (props: ButtonProps) =>
  css`
    &:active {
      ${boxShadow}
      background-color: ${lightenDarkenColor(colorStringFromType(props), -10)};
      border-color: ${colorStringFromType(props)};
    }
  `;

// TODO:
// - Icon Button
// - With Icon
// - Outline
const StyledButton = styled.button<ButtonProps>`
  ${props => BaseStyle(props)}
  ${props => HoverStyle(props)}
  ${props => FocusStyle(props)}
  ${props => ActiveStyle(props)}
  ${transitions(['background, box-shadow, border-color'], 0.15, 'linear')}
`;

export { StyledButton };
