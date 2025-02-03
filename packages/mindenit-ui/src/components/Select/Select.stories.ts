import type { Meta, StoryObj } from '@storybook/vue3'
import { SelectContent, SelectItem, SelectRoot, SelectTrigger } from '.'

const meta: Meta<typeof SelectRoot> = {
	title: 'Forms/Select',
	component: SelectRoot,
}

export default meta

type Story = StoryObj<typeof SelectRoot>

export const Default: Story = {
	render: (args) => ({
		components: { SelectRoot, SelectContent, SelectItem, SelectTrigger },
    setup: () => ({ args }),
    template: `
      <SelectRoot>
        <SelectTrigger placeholder="Select a fruit..." />
        <SelectContent>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </SelectRoot>
    `
	}),
}
