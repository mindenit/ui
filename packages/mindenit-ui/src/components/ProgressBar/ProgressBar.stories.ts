import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { ProgressBar } from '.'

const meta = {
	title: 'Base/ProgressBar',
	component: ProgressBar,
	tags: ['autodocы'],
} satisfies Meta<typeof ProgressBar>

export default meta

const Template: StoryFn<typeof ProgressBar> = (args: unknown) => ({
	components: { ProgressBar },
	setup() {
		return { args }
	},
	template: `<ProgressBar v-bind="args" />`,
})

type Story = StoryObj

export const Default: Story = Template.bind({})
Default.args = {
	modelValue: 10,
}
