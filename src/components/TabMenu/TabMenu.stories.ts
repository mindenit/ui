import type { Meta, StoryFn } from '@storybook/vue3'
import { TabMenuContent, TabMenuList, TabMenuRoot, TabMenuTrigger } from '.'

const meta = {
	title: 'Base/TabMenu',
	component: TabMenuRoot,
	tags: ['autodocs']
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

export const Default = Template.bind({})
Default.args = {
	defaultValue: 'tab1'
}
