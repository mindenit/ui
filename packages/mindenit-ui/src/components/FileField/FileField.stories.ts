import type { Meta, StoryObj } from '@storybook/vue3'
import { FileField } from '.'

const meta = {
	title: 'Forms/FileField',
	component: FileField,
	tags: ['autodoc'],
} satisfies Meta<typeof FileField>

export default meta

type Story = StoryObj<typeof FileField>

export const Default: Story = {
	render: (args: unknown) => ({
		components: { FileField },
		setup() {
			return { args }
		},
		template: `
      <div class="flex items-center justify-center w-full h-fit">
        <FileField v-bind="args" @select="handle" />
      </div>
    `,
	}),
	args: {
		fallback: 'Browse files',
		title: 'Choose file or drag and drop it here',
		description: 'JPEG, PNG and PDF formats up to 50mb',
	},
}
