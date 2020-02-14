import { Size } from 'utils/types';

/**
 * @description Finds the size in pixels
 * @param {Size} size
 * @returns {Number} pixels
 */
export function getSizePixels(size?: Size): number {
  switch (size) {
    case 'tiny':
      return 24;
    case 'small':
      return 32;
    case 'medium':
      return 40;
    case 'large':
      return 48;
    case 'giant':
      return 56;
    default:
      return 40;
  }
}

/**
 * @description Finds the font size in pixels
 * @param {Size} size
 * @returns {Number} font-size
 */
export function getFontSize(size: Size): number {
  switch (size) {
    case 'tiny':
      return 12;
    case 'small':
      return 16;
    case 'medium':
      return 18;
    case 'large':
      return 20;
    case 'giant':
      return 24;
    default:
      return 18;
  }
}

/**
 * @description Manupilate given color to be darken or lighter like Sass, Less
 * @see https://gist.github.com/renancouto/4675192
 * @param {String} color
 * @param {Number} percent like +10 means lighter , -10 means darker
 * @returns {?String} color
 */
export function lightenDarkenColor(color: string, percent: number): string | undefined {
  if (!color) return;
  if (!percent) return color;
  if (color === 'transparent') return color;

  var num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

/**
 * @description Converts hex color to rgba color with opacity given
 * @see https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-2
 * @param {String} hex color
 * @param {Number} opacity
 * @returns {String} RGBA
 */
export function hexToRGBA(hex: string, opacity: number): string {
  let r = '0',
    g = '0',
    b = '0';

  // 3 digits
  if (hex.length == 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length == 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }

  return 'rgb(' + +r + ',' + +g + ',' + +b + ', ' + opacity + ')';
}
