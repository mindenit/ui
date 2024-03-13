import type { Meta, StoryFn } from '@storybook/vue3'
import Text from './TheText.vue'

const meta = {
	component: Text,
	title: 'Typography/Text',
	tags: ['autodocs'],
	argTypes: {
		default: {
			control: 'text',
			description: 'Slot content',
			defaultValue: 'This is the text'
		},
		type: {
			control: 'radio',
			description: 'Text type',
			defaultValue: 'paragraph',
			options: ['lead', 'large', 'paragraph', 'small', 'subtitle']
		}
	}
} satisfies Meta<typeof Text>

const Template: StoryFn<typeof Text> = (args: unknown) => ({
	components: { Text },
	setup() {
		return { args }
	},
	template: `<Text v-bind="args">{{ args.default }}</Text>`
})

export const Lead = Template.bind({})
Lead.args = {
	type: 'lead',
	default: 'This is the paragraph'
}

export const Large = Template.bind({})
Large.args = {
	type: 'large',
	default: 'This is the paragraph'
}

export const Paragraph = Template.bind({})
Paragraph.args = {
	type: 'paragraph',
	default: 'This is the paragraph'
}

export const Small = Template.bind({})
Small.args = {
	type: 'small',
	default: 'This is the paragraph'
}

export const Subtitle = Template.bind({})
Subtitle.args = {
	type: 'subtitle',
	default: 'This is the paragraph'
}

export default meta
