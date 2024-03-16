import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { Icon } from '@iconify/vue'
import { Button } from '.'

const meta = {
	title: 'Base/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		default: 'Click me!'
	},
	argTypes: {
		default: {
			controls: 'text',
			description: 'Slot content',
			defaultValue: 'Click Me!'
		},
		variant: {
			name: 'variant',
			table: {
				type: { summary: 'primary | outlined | ghost | danger' },
				defaultValue: 'primary'
			},
			control: 'inline-radio',
			options: ['primary', 'outlined', 'danger', 'ghost'],
			defaultValue: 'primary'
		},
		class: {
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: ''
			}
		}
	},
	parameters: {
		slots: {
			default: {
				description: 'Default slot',
				template: 'Click me!'
			}
		}
	}
} satisfies Meta<typeof Button>

export default meta

const Template: StoryFn<typeof Button> = (args: unknown) => ({
	components: { Button },
	setup() {
		return { args }
	},
	template: `<Button v-bind="args">{{ args.default }}</Button>`
})

type Story = StoryObj<typeof meta>

export const Primary = Template.bind({})

Primary.args = {
	variant: 'primary',
	disabled: false
}

export const Outlined = Template.bind({})

Outlined.args = {
	variant: 'outlined',
	disabled: false
}

export const Ghost = Template.bind({})

Ghost.args = {
	variant: 'ghost',
	disabled: false
}

export const Danger = Template.bind({})

Danger.args = {
	variant: 'danger',
	disabled: false
}

export const AsChild: Story = {
	args: {
		variant: 'primary',
		asChild: true,
		disabled: false
	},
	parameters: {
		slots: {
			default: {
				template: `<a href="https://github.com/mindenit/ui">Github</a>`
			}
		}
	}
}

export const WithIcon: Story = {
	args: {
		variant: 'primary',
		disabled: false
	},
	parameters: {
		slots: {
			default: {
				components: { Icon },
				template: '<Icon icon="ph:plus" /> Add to bag'
			}
		}
	}
}
