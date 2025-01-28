import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { Icon } from '@iconify/vue'
import { Badge } from '.'

const meta = {
	title: 'Base/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: { type: 'select' },
			options: ['default', 'primary', 'success', 'danger'],
			defaultValue: 'default',
		},
		default: {
			control: 'text',
			description: 'Slot content',
			defaultValue: 'Badge',
		},
	},
} satisfies Meta<typeof Badge>

export default meta

const Template: StoryFn<typeof Badge> = (args: unknown) => ({
	components: { Badge },
	setup() {
		return { args }
	},
	template: `<Badge v-bind="args">{{ args.default }}</Badge>`,
})

type Story = StoryObj

export const Default: Story = Template.bind({})
Default.args = {
	default: 'Badge',
}

export const WithIcon: Story = {
	args: {
		color: 'success',
	},
	parameters: {
		slots: {
			default: {
				components: { Icon },
				template: '<Icon icon="ph:lightning-fill" /> Badge',
			},
		},
	},
}
