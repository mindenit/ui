import Text from './TheText.vue'

const meta: Meta<typeof Text> = {
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
			options: ['lead', 'large', 'paragraph', 'link', 'small', 'subtitle']
		}
	}
}

const Template = (args: unknown) => ({
	components: { Text },
	setup() {
		return { args }
	},
	template: `<Text v-bind="args">{{ args.default }}</Text>`
})

export const Default = Template.bind({})
Default.args = {
	size: 'paragraph',
	default: 'This is the paragraph'
}

export const Link = Template.bind({})
Link.args = {
	type: 'link',
	default: 'This is the link',
	href: '#'
}

export default meta
