import { Size } from 'utils/types';

/**
 * @description Finds the size in pixels
 * @param {Size} size
 * @returns {Number} pixels
 */
export function getSizePixels(size: Size): number {
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
