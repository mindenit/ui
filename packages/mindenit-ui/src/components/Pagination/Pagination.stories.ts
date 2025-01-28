import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { Pagination } from '.'

const meta = {
	title: 'Base/Pagination',
	component: Pagination,
	tags: ['autodocs']
} satisfies Meta<typeof Pagination>

export default meta

const Template: StoryFn<typeof Pagination> = (args: unknown) => ({
	components: { Pagination },
	setup() {
		return { args }
	},
	template: `<Pagination v-bind="args" />`
})

type Story = StoryObj<typeof Pagination>

export const Default: Story = Template.bind({})
Default.args = {
	total: 100,
	siblingCount: 1,
	showEdges: true,
	defaultPage: 2
}
