import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
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
		const value = ref(1)

		return { args, value }
	},
	template: `
	<StepIndicatorRoot v-bind="args" v-model="value">
		<StepIndicatorItem
			v-for="n in 3"
			:key="n"
			:step="n"
			:completed="n < value"
			:steps="3"
		>
			Step {{ n }}
		</StepIndicatorItem>
	</StepIndicatorRoot>
	`
})

type Story = StoryObj<typeof StepIndicatorRoot>

export const Vertical: Story = Template.bind({})

Vertical.args = {
	orientation: 'vertical'
}

export const Horizontal: Story = Template.bind({})

Horizontal.args = {
	orientation: 'horizontal'
}
