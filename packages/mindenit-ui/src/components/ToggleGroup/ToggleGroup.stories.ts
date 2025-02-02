import type { Meta, StoryFn } from '@storybook/vue3'
import { Icon } from '@iconify/vue'
import { ToggleGroupItem, ToggleGroupRoot } from '.'

const meta = {
	component: ToggleGroupRoot,
	title: 'Base/ToggleGroup',
	tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroupRoot>

export default meta

const Template: StoryFn<typeof ToggleGroupRoot> = (args: unknown) => ({
	components: { ToggleGroupRoot, ToggleGroupItem },
	setup() {
		return { args }
	},
	template: `
    <ToggleGroupRoot v-bind="args">
      <ToggleGroupItem value="item-1">
        Button 1
      </ToggleGroupItem>
      <ToggleGroupItem value="item-2">
        Button 2
      </ToggleGroupItem>
      <ToggleGroupItem value="item-3">
        Button 3
      </ToggleGroupItem>
    </ToggleGroupRoot>
  `,
})

export const Default = Template.bind({})
Default.args = {
	type: 'single',
	defaultValue: 'item-1',
}

const TemplateWithIcons: StoryFn<typeof ToggleGroupRoot> = (args: unknown) => ({
	components: { ToggleGroupRoot, ToggleGroupItem, Icon },
	setup() {
		return { args }
	},
	template: `
    <ToggleGroupRoot v-bind="args">
      <ToggleGroupItem value="item-1">
        <Icon icon="lucide:pencil" />
      </ToggleGroupItem>
      <ToggleGroupItem value="item-2">
        <Icon icon="lucide:eye" />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  `,
})

export const WithIcons = TemplateWithIcons.bind({})
WithIcons.args = {
	type: 'single',
	defaultValue: 'item-1',
	appearance: 'icon',
}
