import Title from './TheTitle.vue'

const meta: Meta<typeof Title> = {
	component: Title,
	title: 'Typography/Title',
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
	components: { Title },
	setup() {
		return { args }
	},
	template: `<Title v-bind="args">{{ args.default }}</Title>`
})

export const Default = Template.bind({})
Default.args = {
	size: 'large',
	default: 'This is the title'
}

export default meta
