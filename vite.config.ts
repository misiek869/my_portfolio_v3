import path from 'path'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// Nie używaj @tailwindcss/vite - to nie istnieje
	],
	css: {
		postcss: {
			plugins: [
				tailwindcss(), // Dodaj Tailwind jako plugin PostCSS
			],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	assetsInclude: ['**/*.ttf'],
})
