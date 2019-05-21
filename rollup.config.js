import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default [
  // browser-friendly build
  {
    input: 'src/index.ts',
    output: {
      file: pkg.browser,
      format: 'iife',
      name: 'badgin',
    },
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      // terser(),
    ],
  },
]
