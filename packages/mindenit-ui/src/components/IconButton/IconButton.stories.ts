import type { Meta, StoryFn } from '@storybook/vue3'
import { IconButton } from '.'

const meta = {
	title: 'Base/IconButton',
	component: IconButton,
	tags: ['autodocs'],
	args: {
		icon: 'ph:plus'
	},
	argTypes: {
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
		size: {
			name: 'size',
			table: {
				type: { summary: 'lg | md | sm | xs' },
				defaultValue: 'lg'
			},
			control: 'inline-radio',
			options: ['lg', 'md', 'sm', 'xs'],
			defaultValue: 'lg'
		},
		class: {
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: ''
			}
		}
	}
} satisfies Meta<typeof IconButton>

export default meta

const Template: StoryFn<typeof IconButton> = (args: unknown) => ({
	components: { IconButton },
	setup() {
		return { args }
	},
	template: `<IconButton v-bind="args"/>`
})

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

export const Large = Template.bind({})

Large.args = {
	variant: 'primary',
	size: 'lg'
}

export const Medium = Template.bind({})

Medium.args = {
	variant: 'primary',
	size: 'md'
}

export const Small = Template.bind({})

Small.args = {
	variant: 'primary',
	size: 'sm'
}

export const ExtraSmall = Template.bind({})

ExtraSmall.args = {
	variant: 'primary',
	size: 'xs'
}
