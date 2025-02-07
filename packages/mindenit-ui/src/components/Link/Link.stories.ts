import type { Meta, StoryFn } from '@storybook/vue3'
import type { LinkPropsWithHref } from './index'
import Link from './TheLink.vue'

const meta = {
	component: Link,
	title: 'Typography/Link',
	tags: ['autodocs'],
	argTypes: {
		default: {
			control: 'text',
			description: 'Text in link',
			defaultValue: 'This is the link',
		},
		asChild: {
			control: 'boolean',
			description: 'State of asChild prop',
			defaulValue: false,
		},
	},
} satisfies Meta<typeof Link>

const Template: StoryFn<LinkPropsWithHref> = (args: unknown) => ({
	components: { Link },
	setup() {
		return { args }
	},
	template: `<Link v-bind="args">{{ args.default }}</Link>`,
})

export const Default = Template.bind({})
Default.args = {
	default: 'This is the link',
	href: '#',
}

export default meta
