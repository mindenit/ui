import type { Meta, StoryFn } from '@storybook/vue3'
import { Checkbox } from '.'

const meta = {
	title: 'Base/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		checked: {
			name: 'state',
			table: {
				type: { summary: 'checked | unchecked' },
				defaultValue: 'unchecked'
			},
			control: 'inline-radio',
			options: ['checked', 'unchecked'],
			defaultValue: 'unchecked'
		},
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

export const Checked = Template.bind({})
Checked.args = {
	checked: true
}

export const Uncheked = Template.bind({})
Uncheked.args = {
	checked: false
}
