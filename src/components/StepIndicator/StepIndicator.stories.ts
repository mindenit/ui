import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { StepIndicatorItem, StepIndicatorRoot } from '.'

const meta = {
	title: 'Base/StepIndicator',
	component: StepIndicatorRoot,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<typeof StepIndicatorRoot>

export default meta

const Template: StoryFn<typeof StepIndicatorRoot> = (args: unknown) => ({
	components: { StepIndicatorRoot, StepIndicatorItem },
	setup() {
		return { args }
	},
	template: `<StepIndicatorRoot v-bind="args">
		<StepIndicatorItem step=1 completed=true>Step 1</StepIndicatorItem>
		<StepIndicatorItem step=2 :state="active">Step 2</StepIndicatorItem>
		<StepIndicatorItem step=3>Step 3</StepIndicatorItem>
	</StepIndicatorRoot>`
})

type Story = StoryObj<typeof StepIndicatorRoot>
export const Default: Story = Template.bind({})
