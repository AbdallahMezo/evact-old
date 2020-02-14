import styled, { css } from "styled-components";
import { CheckboxProps } from 'components/Checkbox';
import { transitions, hexToRGBA, lightenDarkenColor } from 'utils/styles';
import { defaultTheme } from 'theme/defaultTheme';

const boxShadow = `box-shadow: 0 0 0px 0.375rem rgba(143, 155, 179, 0.16);`;

const statusColor = (props: CheckboxProps) =>
  props.status ? props?.theme?.colors[props.status] : defaultTheme.colors.primary

const BaseStyle = (props: CheckboxProps) => css`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #8f9bb3;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.5;
  span:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    position: relative;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    background-color: ${props.checked ? statusColor(props) : hexToRGBA(statusColor(props), 0.24)};
    border-color: ${statusColor(props)};
    cursor: pointer;
    &:hover {

    }
  }
  span:last-of-type {
    margin-left: 8px;
    ${props.labelStyle}
  }
`

const CheckedStyle = (props: CheckboxProps) => css`
  svg {
    opacity: ${props.checked ? 1 : 0};
    ${transitions('opacity', 0.15, 'ease-in')};
    fill: #fff;
  }
`

const HoverStyle = (props: CheckboxProps) => css`
  span:first-of-type {
    &:hover {
      background-color: ${props.checked
        ? lightenDarkenColor(statusColor(props), -10)
        : hexToRGBA(statusColor(props), 0.30)};
    }
    ${transitions(['border-color', 'background-color'], 0.10, 'ease-in')}
  }
`

const FocusStyle = (props: CheckboxProps) => css`
  span:first-of-type {
    &:focus {
      ${boxShadow}
      outline: none;
      background-color: ${statusColor(props)};
      border-color: ${statusColor(props)};
    }
  }
`;

const ActiveStyle = (props: CheckboxProps) => css`
  span:first-of-type {
    &:active {
      ${boxShadow}
      background-color: ${lightenDarkenColor(statusColor(props), -10)};
      border-color: ${statusColor(props)};
    }
  }
`;

const StyledCheckbox = styled.label<CheckboxProps>`
  ${props => BaseStyle(props)}
  ${props => CheckedStyle(props)}
  ${props => FocusStyle(props)}
  ${props => HoverStyle(props)}
  ${props => ActiveStyle(props)}
  ${transitions(['border-color', 'box-shadow', 'background-color'], 0.15, 'ease-in')}
`


export {StyledCheckbox};
