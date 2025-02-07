import type { Meta, StoryFn } from '@storybook/vue3'
import { SearchField } from '.'

const meta = {
	title: 'Forms/SearchField',
	component: SearchField,
	tags: ['autodocs']
} satisfies Meta<typeof SearchField>

export default meta

const Template: StoryFn<typeof SearchField> = (args: unknown) => ({
	components: { SearchField },
	setup() {
		return args
	},
	template: `
    <SearchField v-bind="args" placeholder="Search..." />
  `
})

export const Default = Template.bind({})
