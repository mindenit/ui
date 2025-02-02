import { Icon } from '@iconify/vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import { TabMenuContent, TabMenuList, TabMenuRoot, TabMenuTrigger } from '.'

const meta = {
	title: 'Base/TabMenu',
	component: TabMenuRoot,
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text',
			table: {
				type: { summary: 'string' }
			}
		}
	}
} satisfies Meta<typeof TabMenuRoot>

export default meta

const Template: StoryFn<typeof TabMenuRoot> = (args: unknown) => ({
	components: { TabMenuRoot, TabMenuList, TabMenuTrigger, TabMenuContent },
	setup() {
		return { args }
	},
	template: `<TabMenuRoot v-bind="args">
		<TabMenuList>
			<TabMenuTrigger value="tab1">Tab 1</TabMenuTrigger>
			<TabMenuTrigger value="tab2">Tab 2</TabMenuTrigger>
		</TabMenuList>
		<TabMenuContent value="tab1">Content 1</TabMenuContent>
		<TabMenuContent value="tab2">Content 2</TabMenuContent>
	</TabMenuRoot>`
})

const TemplateWithIcons: StoryFn<typeof TabMenuRoot> = (args: unknown) => ({
	components: { TabMenuRoot, TabMenuList, TabMenuTrigger, TabMenuContent, Icon },
	setup() {
		return { args }
	},
	template: `<TabMenuRoot v-bind="args">
		<TabMenuList>
			<TabMenuTrigger value="tab1"><Icon icon="lucide:plus" /> Tab 1</TabMenuTrigger>
			<TabMenuTrigger value="tab2"><Icon icon="lucide:plus" /> Tab 2</TabMenuTrigger>
		</TabMenuList>
		<TabMenuContent value="tab1">Content 1</TabMenuContent>
		<TabMenuContent value="tab2">Content 2</TabMenuContent>
	</TabMenuRoot>`
})

export const Default = Template.bind({})
Default.args = {
	defaultValue: 'tab1'
}

export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
	defaultValue: 'tab1',
	class: 'w-[300px]'
}

export const Vertical = Template.bind({})
Vertical.args = {
	defaultValue: 'tab1',
	orientation: 'vertical'
}

export const WithIcons = TemplateWithIcons.bind({})
WithIcons.args = {
	defaultValue: 'tab1'
}
