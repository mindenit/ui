import type { Meta, StoryFn } from '@storybook/vue3'
import { Checkbox } from '.'

const meta = {
	title: 'Forms/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: ''
			}
		}
	}
} satisfies Meta<typeof Checkbox>

export default meta

const Template: StoryFn<typeof Checkbox> = (args: unknown) => ({
	components: { Checkbox },
	setup() {
		return { args }
	},
	template: `<Checkbox v-bind="args" />`
})

export const Default = Template.bind({})
