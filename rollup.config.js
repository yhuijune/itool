import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: {
            name: 'itools',
            file: pkg.main,
            format: 'umd',
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            alias({
                entries: [{ find: '@', replacement: './src' }],
            }),
            getBabelOutputPlugin({
                presets: ['@babel/preset-env'],
                allowAllFormats: true,
            }),
        ],
    },
];
