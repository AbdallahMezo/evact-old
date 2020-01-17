import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import babel from 'rollup-plugin-babel';

import pkg from './package.json'

function nameExports() {
  return {
    namedExports: {
      'react-is': [
        'isElement',
        'isValidElementType',
        'ForwardRef'
      ],
      'eva-icons': ['replace']
    }
  }
}

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    babel(),
    external(),
    url(),
    svgr(),
    resolve(),
    typescript(),
    commonjs(nameExports())
  ],
  external: ['styled-components', 'react', 'react-dom']
}
