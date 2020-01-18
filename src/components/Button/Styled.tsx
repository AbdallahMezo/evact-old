import styled, { css } from 'styled-components';
import { ButtonProps, ButtonStatus } from 'components/Button';
import { lightenDarkenColor, hexToRGBA, Size } from 'utils';
import { transitions } from 'utils/styles';
import { defaultTheme } from 'theme/defaultTheme';

const boxShadow = `box-shadow: 0 0 0px 0.375rem rgba(143, 155, 179, 0.16);`;

const isControl = (status: ButtonStatus) => status === 'control';

const isGhost = (props: ButtonProps) => props.ghost;

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
  let theme = props.theme || defaultTheme;
  if (props.status === 'control') {
    return 'transparent';
  }

  return props.status ? theme.colors[props.status] : theme.colors.primary;
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
  border: solid;
  border-width: 0.0625rem;
  border-color: ${colorStringFromType(props)};
  cursor: pointer;
  font-weight: 700;
  padding: ${getPadding(props.size || 'medium')};
  ${!isOutline(props) && getButtonColors(props)};
  ${props.status && isControl(props.status) && ButtonControlColors()};
  ${getButtonSize(props)};
  ${props.disabled && getDisabledStyles()};
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

const ActiveStyle = (props: ButtonProps) => css`
  &:active {
    ${boxShadow}
    background-color: ${lightenDarkenColor(colorStringFromType(props), -10)};
    border-color: ${colorStringFromType(props)};
  }
`;

const OutlineButton = (props: ButtonProps) => css`
  color: ${colorStringFromType(props)};
  background-color: ${hexToRGBA(colorStringFromType(props), 0.08)};
  &:hover {
    background-color: ${hexToRGBA(colorStringFromType(props), 0.16)};
  }
  &:active,
  :focus {
    background-color: ${hexToRGBA(colorStringFromType(props), 0.24)};
  }
`;

const GhostButton = (props: ButtonProps) => css`
  color: ${colorStringFromType(props)};
  background-color: transparent;
  border-color: transparent;
  &:hover {
    background-color: ${hexToRGBA(colorStringFromType(props), 0.08)};
    border-color: transparent;
  }
  &:active,
  :focus {
    background-color: ${hexToRGBA(colorStringFromType(props), 0.16)};
    border-color: ${hexToRGBA(colorStringFromType(props), 0.4)};
  }
`;

// TODO:
// - Icon Button
// - With Icon
const StyledButton = styled.button<ButtonProps>`
  ${props => BaseStyle(props)}
  ${props => HoverStyle(props)}
  ${props => FocusStyle(props)}
  ${props => ActiveStyle(props)}
  ${props => isOutline(props) && OutlineButton}
  ${props => isGhost(props) && GhostButton}
  ${transitions(['border-color', 'box-shadow', 'background-color'], 0.15, 'ease-in')}
`;

export { StyledButton };
