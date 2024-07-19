import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { Avatar, AvatarProps } from '.'

const meta = {
	title: 'Base/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['80px', '72px', '64px', '56px', '48px', '40px', '32px', '24px', '20px']
		},
		fallback: { control: 'text' },
		url: { control: 'text' }
	}
} satisfies Meta<typeof Avatar>

export default meta

const Template: StoryFn<AvatarProps> = (args: unknown) => ({
	components: { Avatar },
	setup() {
		return { args }
	},
	template: `<Avatar v-bind="args" />`
})

type Story = StoryObj<AvatarProps>

export const Default: Story = Template.bind({})
Default.args = {
	size: '32px',
	fallback: 'CT',
	url: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
}

export const Blank: Story = Template.bind({})
Blank.args = {
	size: '32px',
	fallback: 'TR'
}
