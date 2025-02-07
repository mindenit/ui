import type { Meta, StoryFn } from '@storybook/vue3'
import { PinField } from '.'

const meta = {
	title: 'Forms/PinField',
	component: PinField,
	tags: ['autodocs']
} satisfies Meta<typeof PinField>

export default meta

const Template: StoryFn<typeof PinField> = (args: unknown) => ({
	components: { PinField },
	setup() {
		return { args }
	},
	template: `<PinField v-bind="args" />`
})

export const Default = Template.bind({})

Default.args = {
	length: 5
}
