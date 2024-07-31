import { DateFormatter, DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DatePicker, DatePickerPreset } from '.'

const meta = {
	title: 'Forms/DatePicker',
	component: DatePicker,
	tags: ['autodocs	']
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

export const WithMinimumValue: Story = {
	render: (args: unknown) => ({
		components: { DatePicker },
		setup() {
			const value = ref<DateValue>()
			const minValue = today(getLocalTimeZone())

			const df = new DateFormatter('en-EN', {
				dateStyle: 'long'
			})

			return { args, df, value, minValue }
		},
		template: `<DatePicker v-model="value" :min-value="minValue" :formatFn="(value) => df.format(value)" />`
	})
}
