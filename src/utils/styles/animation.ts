import { css, keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

function extractArray(array: string | string[]): string {
  return Array.isArray(array) ? array.join(',') : array;
}

export const spin = css`
  animation: ${spinAnimation} 0.6s linear infinite;
`;

export const transitions = (properties: string[] | string, time: number, type: string) => `
  transition: ${extractArray(properties)} ${time}s ${type} ;
`;
