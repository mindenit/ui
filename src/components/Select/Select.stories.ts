import { Meta, StoryFn } from '@storybook/vue3'
import { SelectContent, SelectItem, SelectRoot, SelectTrigger } from '.'

const meta = {
	title: 'Forms/Select',
	component: SelectRoot,
	tags: ['autodocs']
} satisfies Meta<typeof SelectRoot>

export default meta

const Template: StoryFn<typeof SelectRoot> = (args: unknown) => ({
	components: { SelectRoot, SelectContent, SelectItem, SelectTrigger },
	setup() {
		return { args }
	},
	template: `
    <SelectRoot>
      <SelectTrigger placeholder="Select option" />
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
        <SelectItem value="option-3" disabled>Option 3</SelectItem>
      </SelectContent>
    </SelectRoot>
  `
})

export const Default = Template.bind({})
