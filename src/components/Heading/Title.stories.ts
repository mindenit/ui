import Heading from './TheHeading.vue'

const meta: Meta<typeof Heading> = {
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
}

const Template = (args: unknown) => ({
	components: { Heading },
	setup() {
		return { args }
	},
	template: `<Heading v-bind="args">{{ args.default }}</Heading>`
})

export const Default = Template.bind({})
Default.args = {
	size: 'large',
	default: 'This is the title'
}

export default meta
