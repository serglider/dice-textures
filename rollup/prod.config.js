import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import pkg from '../package.json';

export default [
	{
		input: 'src/index.ts',
		output: {
			name: 'createDiceTextures',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			typescript(),
			compiler()
		]
	},
	{
		input: 'src/index.ts',
		plugins: [
			typescript(),
			compiler()
		],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
