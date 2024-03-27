import '../src/assets/index.css'

import type { Preview } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
	parameters: {
		actions: {},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export const decorators = [
	withThemeByClassName({
		themes: {
			light: '',
			dark: 'dark'
		},
		defaultTheme: 'light'
	})
]

export default preview
