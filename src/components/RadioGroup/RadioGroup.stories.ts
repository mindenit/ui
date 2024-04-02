import type { Meta, StoryFn } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'

const meta = {
	component: RadioGroup,
	title: 'Forms/RadioGroup',
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
} satisfies Meta<typeof RadioGroup>

export default meta

const Template: StoryFn<typeof RadioGroup> = (args: unknown) => ({
	components: { RadioGroup },
	setup() {
		return { args }
	},
	template: `<RadioGroup v-bind="args" />`
})

export const Default = Template.bind({})
Default.args = {
	modelValue: 'default',
	options: [
		{ id: 'r1', value: 'default', label: 'Default' },
		{ id: 'r2', value: 'comfortable', label: 'Comfortable' },
		{ id: 'r3', value: 'compact', label: 'Compact' }
	]
}
