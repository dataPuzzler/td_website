import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: ['src/main.ts', 'src/main-2.ts'],
	output: {
		dir: "docs/module",
		format: 'es', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		typescript(),
		resolve(), // tells Rollup how to find date-fns in node_modules
		production && terser() // minify, but only in production
	]
};
