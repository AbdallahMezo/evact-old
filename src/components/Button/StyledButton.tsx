import styled, { css } from 'styled-components';
import { ButtonProps } from 'components/Button';
import { lightenDarkenColor, hexToRGBA, Size } from 'utils';
import { transitions } from 'utils/styles';
import { defaultTheme } from 'theme/defaultTheme';

const boxShadow = `box-shadow: 0 0 0px 0.375rem rgba(143, 155, 179, 0.16);`;

const isControl = (props: ButtonProps) => props.status && props.status === 'control';

const isGhost = (props: ButtonProps) => props.ghost;

const isOutline = (props: ButtonProps) => props.outline;

const isIconOnly = (props: ButtonProps) => props.iconOnly;

const isIconButton = (props: ButtonProps) => props.children && props.icon;

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

const colorFromStatus = (props: ButtonProps): string => {
  let theme = props.theme || defaultTheme;
  if (props.status === 'control') {
    return 'transparent';
  }

  return props.status ? theme.colors[props.status] : theme.colors.primary;
};

const getButtonSize = (props: ButtonProps) => `
  font-size: ${getFontSize(props.size || 'medium')};
`;

const getIconColor = (props: ButtonProps): string => {
  if (isOutline(props)) {
    return colorFromStatus(props);
  }
  if (isControl(props)) {
    '#000';
  }
  return `#fff`;
};

const ButtonControlColors = () => `
  background-color: transparent;
  color: #000;
`;

const getButtonColors = (props: ButtonProps) => `
  ${
    props.status && isControl(props)
      ? ButtonControlColors()
      : `
        background-color: ${colorFromStatus(props)};
        color: #fff;
      `
  }
`;

const getDisabledStyles = () => `
  background-color: rgba(143, 155, 179, 0.24);
  color: rgba(143, 155, 179, 0.48)
`;

const BaseStyle = (props: ButtonProps) => css`
  position: relative;
  text-transform: uppercase;
  border-radius: 4px;
  border-style: solid;
  border-width: 0.0625rem;
  line-height: 1rem;
  text-align: center;
  display: inline-flex;
  align-item: center;
  justify-content: center;
  white-space: no-wrap;
  vertical-align: middle;
  border-color: ${colorFromStatus(props)};
  cursor: pointer;
  font-weight: 700;
  padding: ${getPadding(props.size || 'medium')};
  ${!isOutline(props) && getButtonColors(props)};
  ${isControl(props) && ButtonControlColors()};
  ${getButtonSize(props)};
  ${props.disabled && getDisabledStyles()};
`;

const HoverStyle = (props: ButtonProps) => css`
  &:hover {
    background-color: ${lightenDarkenColor(colorFromStatus(props), 10)};
    border-color: ${colorFromStatus(props)};
  }
`;

const FocusStyle = (props: ButtonProps) => css`
  &:focus {
    ${boxShadow}
    outline: none;
    background-color: ${colorFromStatus(props)};
    border-color: ${colorFromStatus(props)};
  }
`;

const ActiveStyle = (props: ButtonProps) => css`
  &:active {
    ${boxShadow}
    background-color: ${lightenDarkenColor(colorFromStatus(props), -10)};
    border-color: ${colorFromStatus(props)};
  }
`;

const OutlineButton = (props: ButtonProps) => css`
  color: ${colorFromStatus(props)};
  background-color: ${hexToRGBA(colorFromStatus(props), 0.08)};
  &:hover {
    background-color: ${hexToRGBA(colorFromStatus(props), 0.16)};
  }
  &:active,
  :focus {
    background-color: ${hexToRGBA(colorFromStatus(props), 0.24)};
  }
`;

const GhostButton = (props: ButtonProps) => css`
  color: ${colorFromStatus(props)};
  background-color: transparent;
  border-color: transparent;
  &:hover {
    background-color: ${hexToRGBA(colorFromStatus(props), 0.08)};
    border-color: transparent;
  }
  &:active,
  :focus {
    background-color: ${hexToRGBA(colorFromStatus(props), 0.16)};
    border-color: ${hexToRGBA(colorFromStatus(props), 0.4)};
  }
`;

const IconButton = (props: ButtonProps) => css`
  svg {
    ${props.iconPlacement && props.iconPlacement === 'right'
      ? 'margin-left: 0.75rem'
      : 'margin-right: 0.75rem'};
    fill: ${colorFromStatus(props)};
    width: 1rem;
    height: 1rem;
  }
`;

const IconOnly = (props: ButtonProps) => css`
  svg {
    margin: 0;
    fill: ${getIconColor(props)};
    width: 1rem;
    height: 1rem;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  ${props => BaseStyle(props)}
  ${props => HoverStyle(props)}
  ${props => FocusStyle(props)}
  ${props => ActiveStyle(props)}
  ${props => isOutline(props) && OutlineButton}
  ${props => isGhost(props) && GhostButton}
  ${props => isIconButton(props) && IconButton}
  ${props => isIconOnly(props) && IconOnly}
  ${transitions(['border-color', 'box-shadow', 'background-color'], 0.15, 'ease-in')}
`;

export { StyledButton, colorFromStatus };
