import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const production = process.env.prd == "prd";
const buildDir = production ? "docs/module" : "dev/module"

export default {
	input: ['src/main.ts', 'src/main-2.ts'],
	output: {
		dir: buildDir,
		format: 'es', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		typescript(),
		resolve(), // tells Rollup how to find date-fns in node_modules
		production && terser() // minify, but only in production
	]
};
