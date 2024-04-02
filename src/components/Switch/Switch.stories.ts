import type { Meta, StoryFn } from '@storybook/vue3'
import Switch from './TheSwitch.vue'

const meta = {
	component: Switch,
	title: 'Forms/Switch',
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: ''
			},
			modelValue: { control: { type: 'boolean' } }
		}
	}
} satisfies Meta<typeof Switch>

export default meta

const Template: StoryFn<typeof Switch> = (args: unknown) => ({
	components: { Switch },
	setup() {
		return { args }
	},
	template: `<Switch v-bind="args" />`
})

export const Default = Template.bind({})
Default.args = {
	id: 'switch1',
	modelValue: false
}
