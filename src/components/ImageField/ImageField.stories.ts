import { Meta, StoryObj } from '@storybook/vue3'
import { ImageField } from '.'

const meta = {
	title: 'Forms/ImageField',
	component: ImageField,
	tags: ['autodoc']
} satisfies Meta<typeof ImageField>

export default meta

type Story = StoryObj<typeof ImageField>

export const Default: Story = {
	render: (args: unknown) => ({
		components: { ImageField },
		setup() {
			return { args }
		},
		template: `<ImageField v-bind="args" />`
	})
}

export const Customized: Story = {
	render: (args: unknown) => ({
		components: { ImageField },
		setup() {
			return { args }
		},
		template: `<ImageField v-bind="args" />`
	}),
	args: { title: 'Upload Image', description: 'Min 400x400px, PNG or JPEG' }
}
