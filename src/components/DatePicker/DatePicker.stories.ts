import { DateFormatter, DateValue } from '@internationalized/date'
import { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DatePicker } from '.'

const meta = {
	title: 'Forms/DatePicker',
	component: DatePicker
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
	render: (args: unknown) => ({
		components: { DatePicker },
		setup() {
			const value = ref<DateValue>()

			const df = new DateFormatter('en-EN', {
				dateStyle: 'long'
			})

			return { args, df, value }
		},
		template: `<DatePicker v-model="value" :formatFn="(value) => df.format(value)" />`
	})
}
