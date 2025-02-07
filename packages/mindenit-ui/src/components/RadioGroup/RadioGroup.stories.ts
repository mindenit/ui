import type { Meta, StoryFn } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'
import RadioItem from './RadioItem.vue'

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
	components: { RadioGroup, RadioItem },
	setup() {
		return { args }
	},
	template: `<RadioGroup v-bind="args">
		<RadioItem value='option1' label='Option 1' />
		<RadioItem value='option2' label='Option 2' />
		<RadioItem value='option3' label='Option 3' />
	</RadioGroup>`
})

export const Default = Template.bind({})
Default.args = {
	defaultValue: 'option1'
}
