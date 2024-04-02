/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'royal-blue-50': 'hsl(226, 100%, 97%)',
				'royal-blue-100': 'hsl(225, 100%, 94%)',
				'royal-blue-200': 'hsl(227, 96%, 89%)',
				'royal-blue-300': 'hsl(228, 96%, 82%)',
				'royal-blue-400': 'hsl(233, 91%, 74%)',
				'royal-blue-500': 'hsl(238, 85%, 67%)',
				'royal-blue-600': 'hsl(242, 69%, 59%)',
				'royal-blue-700': 'hsl(242, 51%, 48%)',
				'royal-blue-800': 'hsl(242, 55%, 41%)',
				'royal-blue-900': 'hsl(241, 47%, 34%)',
				'royal-blue-950': 'hsl(243, 47%, 20%)',
				'fiord-50': 'hsl(220, 33%, 98%)',
				'fiord-100': 'hsl(220, 30%, 96%)',
				'fiord-200': 'hsl(212, 29%, 91%)',
				'fiord-300': 'hsl(215, 23%, 84%)',
				'fiord-400': 'hsl(217, 18%, 65%)',
				'fiord-500': 'hsl(217, 14%, 47%)',
				'fiord-600': 'hsl(215, 17%, 34%)',
				'fiord-700': 'hsl(215, 21%, 26%)',
				'fiord-800': 'hsl(219, 29%, 18%)',
				'fiord-900': 'hsl(225, 41%, 11%)',
				'fiord-950': 'hsl(226, 54%, 8%)',
				'christi-50': 'hsl(83, 52%, 95%)',
				'christi-100': 'hsl(85, 53%, 89%)',
				'christi-200': 'hsl(87, 54%, 80%)',
				'christi-300': 'hsl(88, 51%, 67%)',
				'christi-400': 'hsl(88, 47%, 54%)',
				'christi-500': 'hsl(89, 49%, 44%)',
				'christi-600': 'hsl(90, 51%, 35%)',
				'christi-700': 'hsl(91, 47%, 27%)',
				'christi-800': 'hsl(91, 41%, 23%)',
				'christi-900': 'hsl(92, 36%, 20%)',
				'christi-950': 'hsl(94, 49%, 10%)',
				'amaranth-50': 'hsl(6, 71%, 97%)',
				'amaranth-100': 'hsl(0, 78%, 95%)',
				'amaranth-200': 'hsl(358, 73%, 90%)',
				'amaranth-300': 'hsl(357, 72%, 82%)',
				'amaranth-400': 'hsl(355, 71%, 71%)',
				'amaranth-500': 'hsl(354, 68%, 56%)',
				'amaranth-600': 'hsl(351, 58%, 50%)',
				'amaranth-700': 'hsl(349, 63%, 41%)',
				'amaranth-800': 'hsl(348, 60%, 35%)',
				'amaranth-900': 'hsl(346, 57%, 30%)',
				'amaranth-950': 'hsl(348, 65%, 16%)'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
}
