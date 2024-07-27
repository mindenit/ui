import { Meta, StoryObj } from '@storybook/vue3'
import { FileTrigger } from '.'

const meta = {
	title: 'Forms/FileTrigger',
	component: FileTrigger,
	tags: ['autodoc']
} satisfies Meta<typeof FileTrigger>

export default meta

type Story = StoryObj<typeof FileTrigger>

export const Default: Story = {
	render: (args: unknown) => ({
		components: { FileTrigger },
		setup() {
			return { args }
		},
		template: `
      <FileTrigger v-bind="args">Browse file</FileTrigger>
    `
	})
}
