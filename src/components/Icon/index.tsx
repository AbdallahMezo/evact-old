import * as React from 'react';
import * as eva from 'eva-icons';
import { useEffect } from 'react';
import { Size } from 'utils/types';
import { getSizePixels } from 'utils';

export type IconTheme = 'filled' | 'outlined';

export interface IconProps {
  type: string;
  fill?: IconTheme;
  width?: number | string;
  size?: Size;
  animation?: any;
}

function Icon(props: IconProps): JSX.Element {
  const { fill, width = 20, type, size, animation, ...rest } = props;

  function getIconSize(): any {
    return {
      width: size ? getSizePixels(size) : width,
      height: size ? getSizePixels(size) : width
    };
  }

  useEffect(() => {
    eva.replace(getIconSize());
  }, [props]);

  function renderIcon() {
    return <i data-eva={type} data-eva-fill={fill} data-eva-animation={animation} {...rest} />;
  }

  return renderIcon();
}

export default Icon;
