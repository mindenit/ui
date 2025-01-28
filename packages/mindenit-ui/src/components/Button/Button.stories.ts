import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup: () => ({
      args
    }),
    template: `<Button v-bind="args">Click me!</Button>`
  }),
  args: {
    variant: 'primary'
  }
}