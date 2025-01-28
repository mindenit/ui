import type { Meta, StoryFn } from '@storybook/vue3'
import Heading from './TheHeading.vue'

const meta = {
	component: Heading,
	title: 'Typography/Heading',
	tags: ['autodocs'],
	argTypes: {
		default: {
			control: 'text',
			description: 'Slot content',
			defaultValue: 'This is the title'
		},
		size: {
			control: 'radio',
			description: 'Title size',
			defaultValue: 'large',
			options: ['large', 'medium', 'small', 'tiny']
		}
	}
} satisfies Meta<typeof Heading>

const Template: StoryFn<typeof Heading> = (args: unknown) => ({
	components: { Heading },
	setup() {
		return { args }
	},
	template: `<Heading v-bind="args">{{ args.default }}</Heading>`
})

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	default: 'This is the title'
}

export const Medium = Template.bind({})
Medium.args = {
	size: 'medium',
	default: 'This is the title'
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	default: 'This is the title'
}

export const Tiny = Template.bind({})
Tiny.args = {
	size: 'tiny',
	default: 'This is the title'
}

export default meta
