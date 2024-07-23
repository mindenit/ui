import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { StepIndicator, StepIndicatorProps } from '.'

const meta = {
	title: 'Base/StepIndicator',
	component: StepIndicator,
	tags: ['autodocs'],
	args: {
		default: 'Text here'
	},
	argTypes: {
		default: {
			controls: 'text',
			description: 'Slot content',
			defaultValue: 'Text here'
		},
		step: {
			control: 'number',
			description: 'Step number',
			defaultValue: 1
		},
		state: {
			name: 'state',
			table: {
				type: { summary: 'default | active | completed' }
			},
			control: 'inline-radio',
			options: ['default', 'active', 'completed'],
			defaultValue: 'default'
		}
	}
} satisfies Meta<typeof StepIndicator>

export default meta

const Template: StoryFn<StepIndicatorProps> = (args: unknown) => ({
	components: { StepIndicator },
	setup() {
		return { args }
	},
	template: `<StepIndicator v-bind="args" >{{ args.default }}</StepIndicator>`
})

type Story = StoryObj<StepIndicatorProps>

export const Default: Story = Template.bind({})
Default.args = {
	step: 1,
	state: 'default'
}
