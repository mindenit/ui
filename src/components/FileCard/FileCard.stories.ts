import { Meta, StoryObj } from '@storybook/vue3'
import { FileCard } from '.'

const meta = {
	title: 'Base/FileCard',
	component: FileCard,
	tags: ['autodocs']
} satisfies Meta<typeof FileCard>

export default meta

type Story = StoryObj<typeof FileCard>

export const Default: Story = {
	render: (args: unknown) => ({
		components: { FileCard },
		setup() {
			return { args }
		},
		template: `<FileCard title="my-cv.pdf" description="0 KB of 120 KB" />`
	})
}

export const Completed: Story = {
	render: (args: unknown) => ({
		components: { FileCard },
		setup() {
			return { args }
		},
		template: `<FileCard title="my-cv.pdf" description="0 KB of 120 KB" is-uploaded />`
	})
}
