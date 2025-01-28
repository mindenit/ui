import type { Meta, StoryObj } from "@storybook/vue3";
import DatePicker from './DatePicker.vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Forms/DatePicker',
  component: DatePicker
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => ({
    components: { DatePicker },
    template: `<DatePicker />`
  })
}