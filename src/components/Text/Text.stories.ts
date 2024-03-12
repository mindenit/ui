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

export default meta
