import type { Preview } from "@storybook/vue3";
import { withThemeByClassName } from '@storybook/addon-themes'
import './index.css'
import './normalize.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
	withThemeByClassName({
		themes: {
			light: '',
			dark: 'dark'
		},
		defaultTheme: 'light'
	})
]

export default preview;
